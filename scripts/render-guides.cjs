const fs=require('fs');
const path=require('path');
const root=path.resolve(__dirname,'..');
const escape=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function inline(text,file) {
  const snippets=[];
  text=text.replace(/`([^`]+)`/g,(_,code)=>`\u0000${snippets.push(`<code>${escape(code)}</code>`)-1}\u0000`);
  text=escape(text);
  text=text.replace(/\[([^\]]+)\]\(([^)]+)\)/g,(_,label,target)=>{
    let href=target;
    if (!/^[a-z]+:/i.test(target)) {
      const [local,hash]=target.split('#');
      if(local.endsWith('.md')) {
        const absolute=path.resolve(path.dirname(file),local);
        const relative=path.relative(path.join(root,'docs'),absolute).replace(/\\/g,'/').replace(/\.md$/,'');
        if(!relative.startsWith('..'))href=`#${relative}`;
      } else if(local)href=path.relative(root,path.resolve(path.dirname(file),local)).replace(/\\/g,'/')+(hash?`#${hash}`:'');
    }
    if(/^(?:javascript|data):/i.test(href))return label;
    return `<a href="${href}"${/^https?:/i.test(href)?' target="_blank" rel="noopener noreferrer"':''}>${label}</a>`;
  });
  text=text.replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>');
  return text.replace(/\u0000(\d+)\u0000/g,(_,index)=>snippets[index]);
}
function markdown(text,file) {
  const lines=text.split(/\r?\n/);const out=[];let index=0;
  while(index<lines.length) {
    const line=lines[index];
    if(!line.trim()){index++;continue;}
    if(line.startsWith('```')) {
      const language=line.slice(3);const code=[];index++;
      while(index<lines.length&&!lines[index].startsWith('```'))code.push(lines[index++]);
      index++;out.push(`<pre class="ds-code" tabindex="0" aria-label="${escape(language||'代码')}示例"><code>${escape(code.join('\n'))}</code></pre>`);continue;
    }
    const heading=line.match(/^(#{1,4})\s+(.+)/);
    if(heading){const level=heading[1].length;out.push(`<h${level}>${inline(heading[2],file)}</h${level}>`);index++;continue;}
    if(line.startsWith('|')&&/^\|[\s:|-]+\|\s*$/.test(lines[index+1]||'')) {
      const cells=row=>row.trim().replace(/^\||\|$/g,'').split('|').map(c=>c.trim());
      const header=cells(line);index+=2;const rows=[];
      while(index<lines.length&&lines[index].startsWith('|'))rows.push(cells(lines[index++]));
      out.push(`<div class="ds-table-scroll" tabindex="0" aria-label="规范表格"><table class="ds-table"><thead><tr>${header.map(cell=>`<th scope="col">${inline(cell,file)}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map(cell=>`<td>${inline(cell,file)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);continue;
    }
    const list=line.match(/^(- |\d+\. )(.+)/);
    if(list){const ordered=/^\d/.test(list[1]);const items=[];
      while(index<lines.length){const item=lines[index].match(ordered?/^\d+\. (.+)/:/^- (.+)/);if(!item)break;items.push(`<li>${inline(item[1].replace(/^\[ \] /,'□ '),file)}</li>`);index++;}
      const tag=ordered?'ol':'ul';out.push(`<${tag}>${items.join('')}</${tag}>`);continue;
    }
    if(/^---+$/.test(line)){out.push('<hr class="ds-divider">');index++;continue;}
    const paragraph=[line];index++;
    while(index<lines.length&&lines[index].trim()&&!/^(?:#|- |\d+\. |```|\|)/.test(lines[index]))paragraph.push(lines[index++]);
    out.push(`<p>${inline(paragraph.join(' '),file)}</p>`);
  }
  return out.join('\n');
}
const docs=[];
function collect(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const file=path.join(dir,entry.name);if(entry.isDirectory())collect(file);else if(entry.name.endsWith('.md')){const text=fs.readFileSync(file,'utf8');docs.push({id:path.relative(path.join(root,'docs'),file).replace(/\\/g,'/').replace(/\.md$/,''),title:text.match(/^#\s+(.+)/m)?.[1]||entry.name,html:markdown(text,file),group:file.includes(`${path.sep}components${path.sep}`)?'组件规范':file.includes(`${path.sep}patterns${path.sep}`)?'页面场景':'实施指南'})}}}
collect(path.join(root,'docs'));
const template=fs.readFileSync(path.join(root,'web/handbook.html'),'utf8');
fs.writeFileSync(path.join(root,'handbook.html'),template.replace('/*__GUIDES__*/',`window.DS_GUIDES=${JSON.stringify(docs).replace(/</g,'\\u003c')};`));
console.log(`Offline handbook: ${docs.length} searchable documents`);

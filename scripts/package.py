"""Optional portable bundle. Requires Python 3; npm build itself is Node-only."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

root = Path(__file__).resolve().parent.parent
output = root / 'artifacts' / 'ui-design-system-v3.zip'
output.parent.mkdir(exist_ok=True)
inputs = []
for name in ['tokens', 'web', 'scripts', 'docs', 'dist', '.cursor']:
    inputs.extend(file for file in (root / name).rglob('*')
                  if file.is_file() and '__pycache__' not in file.parts)
for name in ['README.md', 'DESIGN-SPEC.md', 'compare.html', 'index.html',
             'handbook.html', 'build.js', 'package.json', 'package-lock.json', '.gitignore']:
    inputs.append(root / name)
inputs.extend((root / 'artifacts').glob('*.png'))
inputs.extend((root / 'artifacts').glob('*.md'))
with ZipFile(output, 'w', compression=ZIP_DEFLATED, compresslevel=6) as bundle:
    for file in sorted(set(inputs)):
        relative = file.relative_to(root)
        bundle.write(file, 'ui-design-system-v3/' + relative.as_posix())
print(f'Bundle: {len(set(inputs))} files, {output.stat().st_size / 1048576:.2f} MB')

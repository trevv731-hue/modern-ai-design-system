"""Optional portable bundle of the current system. Requires Python 3."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

root = Path(__file__).resolve().parent.parent
output = root / 'artifacts' / 'ui-design-system-v3.zip'
output.parent.mkdir(exist_ok=True)
inputs = []
for name in ['tokens', 'web', 'scripts', 'docs', 'dist', '.cursor']:
    inputs.extend(file for file in (root / name).rglob('*')
                  if file.is_file() and '__pycache__' not in file.parts)
for name in ['README.md', 'index.html', 'handbook.html', 'package.json',
             'package-lock.json', '.gitignore', 'LICENSE']:
    inputs.append(root / name)
with ZipFile(output, 'w', compression=ZIP_DEFLATED, compresslevel=6) as bundle:
    for file in sorted(set(inputs)):
        bundle.write(file, 'ui-design-system-v3/' + file.relative_to(root).as_posix())
print(f'Bundle: {len(set(inputs))} files, {output.stat().st_size / 1048576:.2f} MB')

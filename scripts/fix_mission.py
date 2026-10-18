import sys

path = r'components\home\MissionSection.jsx'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Keep all lines except the two orphan lines (old text + orphan </p>)
cleaned = []
skip_next = False
for i, line in enumerate(lines):
    if 'founded in 2007 by college friends' in line:
        skip_next = True
        continue
    if skip_next and line.strip() == '</p>':
        skip_next = False
        continue
    cleaned.append(line)

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(cleaned)

print('Done. Lines:', len(cleaned))

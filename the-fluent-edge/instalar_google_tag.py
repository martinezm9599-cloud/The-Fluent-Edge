from pathlib import Path
import shutil

# Google Tag de Google Ads
GOOGLE_TAG = """<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-1014343949"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-1014343949');
</script>
"""

# La carpeta donde está este script
PROJECT_DIR = Path(__file__).parent

changed = 0
skipped = 0
no_head = 0

for html_file in PROJECT_DIR.rglob("*.html"):

    # No modificar archivos dentro de la carpeta de backup
    if "BACKUP" in html_file.parts:
        continue

    try:
        content = html_file.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        content = html_file.read_text(encoding="utf-8-sig")

    # Evitar instalar el tag dos veces
    if "AW-1014343949" in content:
        skipped += 1
        continue

    # Buscar </head>
    if "</head>" not in content.lower():
        no_head += 1
        print(f"Sin </head>: {html_file}")
        continue

    # Insertar antes de </head>
    position = content.lower().index("</head>")

    new_content = (
        content[:position]
        + GOOGLE_TAG
        + "\n"
        + content[position:]
    )

    # Crear backup individual antes de modificar
    backup_file = html_file.with_suffix(html_file.suffix + ".backup")
    shutil.copy2(html_file, backup_file)

    html_file.write_text(new_content, encoding="utf-8")

    changed += 1
    print(f"OK: {html_file}")

print("\n--------------------------------")
print(f"Archivos modificados: {changed}")
print(f"Ya tenían el tag: {skipped}")
print(f"Sin </head>: {no_head}")
print("--------------------------------")
print("Terminado.")
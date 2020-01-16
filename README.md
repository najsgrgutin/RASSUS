# RASSUS
RASSUS projekt/seminar

# Mail Service Setup 

## 1. kreirat virtualenv:
    python3 -m venv rassus_lab
	
## 2. aktivirat virtualenv:
    source rassus_lab/bin/activate
	
## 3. instalirat requirementse:
    cd RASSUS/rassus_service/
    pip install requirements.txt

## 4. postavit enviroment varijable
    DJANGO_SETTINGS_MODULE=rassus_service.settings
    EMAIL_HOST_PASSWORD
    JWT_PUBLIC_KEY
    JWT_ALGORITHM

## 4. pozicionirat se u folder projekta:
    python manage.py runserver

# Client setup

Potrebno je klonirati repo te se pozicionirati u razinu s package.json.
Zatim je potrebno izvrsiti naredbu npm install kako bi se preuzeli node_modules, 
te se aplikacija pokrece s npm run dev. Aplikacija ce se po defaultu pokrenuti na portu 3000,
ako je taj port zauzet moze se izvrsiti naredba npm run dev — -p port_number. 
Za pokrenuti aplikaciju potrebno je imati Node.js >=v10, po mogucnosti najnoviju stabilnu verziju (LTS). 

# Authentication Service setup

Unutar auth_service direktorija nalazi se AuthService.sln solution koji je potrebno otvoriti u Visual Studio IDE-u
gdje se i pokrece servis.

# Keycloak Service setup

Unutar Keycloak/bin direktorija nalazi se skripta za pokretanje Keycloak servera. Skriptu je potrebno pokrenuti iz windows command prompta,
linux terminala ili mac terminala.
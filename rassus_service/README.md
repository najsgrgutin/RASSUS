# Setup 

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
    
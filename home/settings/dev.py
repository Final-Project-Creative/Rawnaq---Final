'''Use this for development'''

from .base import *

# ALLOWED_HOSTS += ['127.0.0.1']
ALLOWED_HOSTS = ['198.211.99.20', 'localhost', '127.0.0.1']
DEBUG = True

WSGI_APPLICATION = 'home.wsgi.dev.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'shop4',
        'USER': 'root',
        'PASSWORD': 'imad12345*',
        'PORT': '3306',
        'HOST': 'localhost',
    }
}

CORS_ORIGIN_WHITELIST = (
    'http://localhost:3000',
)

# Stripe

STRIPE_PUBLIC_KEY = 'pk_test_TYooMQauvdEDq54NiTphI7jx'
STRIPE_SECRET_KEY = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc'
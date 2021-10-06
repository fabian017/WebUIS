from django.db import models
from django.db.models.fields import CharField

# Create your models here.

# Modelo para la entidad tipoDocumento
class TipoDocumento(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=30)

#Modelo para la entidad ciudad
class Ciudad(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=30)

#Modelo para la entidad persona
class Persona(models.Model):
    idtipoDocumento = models.ForeignKey(TipoDocumento, on_delete=models.CASCADE)
    ciudad = models.ForeignKey(Ciudad, on_delete=models.CASCADE)
    nombres = models.CharField(max_length=30)
    apellidos = models.CharField(max_length=30)
    documento = models.CharField(max_length=30)
    fechanacimiento = models.CharField(max_length=40)
    email = models.CharField(max_length=30)
    telefono = models.CharField(max_length=30)
    usuario = models.CharField(max_length=30)
    password = models.CharField(max_length=30)



from django import forms
from django.db.models import fields
from .models import Ciudad, Persona

"""
Formulario para llenar de ciudades
"""
class CiudadForm(forms.ModelForm):

    class Meta:
        model = Ciudad

        fields = [
            'nombre',
            'descripcion',
        ]

        labels = {
            'nombre':'Nombre',
            'descripcion': "Descripcion",
        }

        widgets = {
            'nombre': forms.TextInput(attrs={'class':'form-control', 'required':''}),
            'descripcion': forms.TextInput(attrs={'class': 'form-control', 'required': ''}),
        }

class PersonaForm(forms.ModelForm):

    class Meta:
        model = Persona

        fields = {
            'nombres':'Nombre',
            'apellidos':'Apellido',
            'documento':'Documento',
            'fechanacimiento':'Fecha de Nacimiento',
            'email':'Email',
            'telefono':'Telefono',
            'usuario':'Usuario',
            'password':'Contraseña'
        }

        widgets = {
            'apellidos': forms.TextInput(attrs={'class': 'form-control', 'required': ''}),
            'nombres': forms.TextInput(attrs={'class': 'form-control', 'required': ''}),
            'documento': forms.TextInput(attrs={'class': 'form-control', 'required': ''}),
            'fechanacimiento': forms.TextInput(attrs={'class': 'form-control', 'required': ''}),
            'email': forms.TextInput(attrs={'class': 'form-control', 'required': ''}),
            'telefono': forms.TextInput(attrs={'class': 'form-control', 'required': ''}),
            'usuario': forms.TextInput(attrs={'class': 'form-control', 'required': ''}),
            'password': forms.TextInput(attrs={'class': 'form-control', 'required': ''}),
        }

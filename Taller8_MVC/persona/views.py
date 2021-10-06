from django import template
from django.http.response import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.http import HttpResponse
from django.template import context, loader
from persona.models import Ciudad, Persona, TipoDocumento
from persona.forms import CiudadForm, PersonaForm
from django.urls import reverse

# Create your views here.

def index(request):
    ciudades = Ciudad.objects.all()
    template = loader.get_template('persona/index.html')
    context = {
        'ciudades':ciudades,
    }
    return HttpResponse(template.render(context, request))

def home(request):
    template = loader.get_template('index.html')
    context = {}
    return HttpResponse(template.render(context, request))

def ciudades(request):
    ciudades = Ciudad.objects.all()
    template = loader.get_template('persona/ciudades.html')
    context = {'ciudades': ciudades,}
    return HttpResponse(template.render(context, request))


def personas(request):
    personas = Persona.objects.all()
    template = loader.get_template('persona/personas.html')
    context = {'personas': personas, }
    return HttpResponse(template.render(context, request))

def new_ciudad(request):
    #se ejecuta cuando el usuario envia el formulario con lo datos
    if request.method == 'POST':
        #Crea una instancia del autor
        form = CiudadForm(request.POST)
        #Evaluamos si el formulario es correcto, lo guardamos y redireccionamos
        if form.is_valid():
            #Obtenemos lo datos del formulario
            nombrex = form.cleaned_data['nombre']
            descripcionx = form.cleaned_data['descripcion']
            ciudad = Ciudad(nombre=nombrex, descripcion = descripcionx)
            ciudad.save()
            return HttpResponseRedirect(reverse('ciudades'))
    
    else:
        #Se ejecuta cuando el usuario va a llenar el formulario
        form = CiudadForm()
    

    return render(request, 'persona/create_ciudades.html', {'form':form})


def new_persona(request):
    #se ejecuta cuando el usuario envia el formulario con lo datos
    if request.method == 'POST':
        #Crea una instancia del autor
        form = PersonaForm(request.POST)
        #Evaluamos si el formulario es correcto, lo guardamos y redireccionamos
        if form.is_valid():
            #Obtenemos lo datos del formulario
            ciudadd = Ciudad.objects.get(pk=2)
            docd = TipoDocumento.objects.get(pk=2)
            nombrex = form.cleaned_data['nombres']
            apellidox = form.cleaned_data['apellidos']
            documentox = form.cleaned_data['documento']
            fechanacimientox = form.cleaned_data['fechanacimiento']
            emailx = form.cleaned_data['email']
            telefonox = form.cleaned_data['telefono']
            usuariox = form.cleaned_data['usuario']
            passwordx = form.cleaned_data['password']
            persona = Persona(idtipoDocumento= docd, ciudad= ciudadd, nombres=nombrex, apellidos = apellidox, documento =documentox, fechanacimiento=fechanacimientox, email = emailx,telefono=telefonox, usuario=usuariox,password=passwordx)
            persona.save()
            return HttpResponseRedirect(reverse('personas'))

    else:
        #Se ejecuta cuando el usuario va a llenar el formulario
        form = PersonaForm()

    return render(request, 'persona/create_personas.html', {'form': form})

def edit_persona(request, id_persona):
    persona = Persona.objects.filter(id=id_persona).first()
    form = PersonaForm(instance=persona)
    return render(request, "persona/edit_personas.html", {'form': form, "persona":persona})


def actualizar_persona(request, id_persona):
    persona = Persona.objects.get(pk=id_persona)
    form = PersonaForm(request.POST, instance=persona)
    if form.is_valid():
        form.save()
    personas = Persona.objects.all()
    template = loader.get_template('persona/personas.html')
    context = {'personas': personas, }
    return HttpResponse(template.render(context, request))

def eliminar_persona(request, id_persona):
    persona = Persona.objects.get(pk=id_persona)
    persona.delete()
    personas = Persona.objects.all()
    template = loader.get_template('persona/personas.html')
    context = {
        'personas': personas,
        'mensaje' : 'OK',
        }
    return HttpResponse(template.render(context, request))
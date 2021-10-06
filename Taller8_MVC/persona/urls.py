from django.urls import path
from . import views

urlpatterns = [
    path('',views.home, name='home'),
    path('persona/', views.index, name = 'index'),
    path('ciudades/', views.ciudades, name ='ciudades'),
    path('ciudades/new/', views.new_ciudad, name = 'new_ciudades'),
    path('personas/', views.personas, name='personas'),
    path('personas/new/', views.new_persona, name='new_persona'),
    path('personas/editar/<int:id_persona>', views.edit_persona, name="editar_persona"),
    path('personas/actualizar/<int:id_persona>', views.actualizar_persona, name="actualizar_persona"),
    path('personas/eliminar/<int:id_persona>', views.eliminar_persona, name="eliminar_persona"),
]

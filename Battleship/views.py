from django.http import HttpResponse
from django.shortcuts import render
 
def hello(request):
    return HttpResponse("Hello world ! ")

def Battleship(request):
    context = {}
    context['hello'] = 'Hello World!'
    return render(request, 'Battleship.html',context)

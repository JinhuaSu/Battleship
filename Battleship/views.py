from django.http import HttpResponse
from django.shortcuts import render
 
def hello(request):
    return HttpResponse("Hello world ! ")

def Battleship(request):
    context = {}
    context['hello'] = 'Hello World!'
    context['rows'] =  [str(i) for i in range(7)]
    context['columns'] =  [str(i) for i in range(7)]
    return render(request, 'Battleship.html',context)

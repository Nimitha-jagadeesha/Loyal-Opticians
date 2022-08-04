from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'main/home.html')

def eyeglasses(request):
    return render(request, 'main/eyeglasses.html')

def contactlenses(request):
    return render(request, 'main/contactlenses.html')

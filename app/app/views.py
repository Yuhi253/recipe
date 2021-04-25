from django.shortcuts import render, get_object_or_404, redirect
from .forms import *

# Create your views here.
def index(request):
    return render(request,'app/index.html',{})

# def login(request):
#     return render(request,'app/login.html',{})


def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form = SignUpForm()

    context = {'form':form}
    return render(request, 'app/signup.html', context)
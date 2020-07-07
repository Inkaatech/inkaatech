from django.contrib.auth import login, authenticate
from django.shortcuts import render, redirect
from .forms import SignUpForm
from .models import Profile
from .serializers import ProfileSerializer
from rest_framework import generics     

class ProfileListCreate(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


def signupuser(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            user.refresh_from_db()  # load the profile instance created by the signal
            user.profile.birth_date = form.cleaned_data.get('birth_date')
            user.save()
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=user.username, password=raw_password)
            login(request, user)
            return redirect('home')
    else:
        form = SignUpForm()
    return render(request, 'customers/signupuser.html', {'form': form})

def home(request):
    return render(request, 'customers/home.html')

'''
def home(request):
    return render(request, 'customers/home.html')

def signupuser(request):
    if request.method == 'GET':
        return render(request, 'customers/signupuser.html', {'form':UserCreationForm()})
    else:
        if request.POST['password1'] == request.POST['password2']:
            try:
                user = User.objects.create_user(request.POST['username'], password=request.POST['password1'])
                user.save()  # try adding email authentication here
                login(request, user)
                return redirect('mainpage')
            except IntegrityError:
                return render(request, 'customers/signupuser.html', {'form':UserCreationForm(), 'error':'That username has already been taken. Please choose a new username'})
        else:
            return render(request, 'customers/signupuser.html', {'form':UserCreationForm(), 'error':'Passwords did not match'})

def mainpage(request):
    return render(request, 'customers/mainpage.html') 

def loginuser(request):
    if request.method == 'GET':
        return render(request, 'customers/loginuser.html', {'form':AuthenticationForm()})
    else:
        user=authenticate(request, username=request.POST['username'], password= request.POST['password'])
    if user is None:
        return render(request, 'customers/loginuser.html', {'form':AuthenticationForm(), 'error':'username and password did not match'})
    else:
        login(request, user)
        return redirect('mainpage')

def logoutuser(request):
    if request.method =='POST':
        logout(request)
        return redirect('home')
'''
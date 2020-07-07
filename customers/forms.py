from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class SignUpForm(UserCreationForm):
    #birth_date = forms.DateField(help_text='Required. Format: YYYY-MM-DD')
    email = forms.EmailField(help_text='Please enter a valid email')
    class Meta:
        model = User
        fields = ('username','email' , 'password1', 'password2',)
from django.forms import ModelForm 
from django.contrib.auth.models import User 
from django.contrib.auth.forms import UserCreationForm
from django import forms

class UserForm(ModelForm):
    class Meta:
        model = User 
        fields = ['username', 'email']

class SignUpForm(UserCreationForm):
    email = forms.EmailField()
    first_name = forms.CharField(max_length=100)
    last_name = forms.CharField(max_length=100)
    occupation = forms.CharField(max_length = 100)
    residential_address = forms.CharField(max_length=100)
    gender = forms.CheckboxInput()

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'gender', 'occupation', 'residential_address', 'email', 'password1', 'password2')






from django import forms

class SearchForm(forms.Form):
    search_flag = forms.BooleanField(widget=forms.HiddenInput(), initial=True, required=False)
    query = forms.CharField(widget=forms.TextInput(attrs={'size': '30', 'style' : 'border-radius: 8px; border-width: 1px; border-color: black; margin-left: 10px; color:  #636261; padding: 5px;'}))
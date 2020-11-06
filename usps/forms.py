from django import forms
from django.conf import settings
from django.forms import ModelForm, Textarea, CheckboxInput, CheckboxSelectMultiple, SelectMultiple, Select, RadioSelect

from django.forms.widgets import DateInput, SelectDateWidget

from .models import AllData, CountPaperData

from si.models import PromptnessList, PregnantPostpartumList, CareOrFollowUpList, SEXE, ACNC, ENCEINTE_POSTPARTUM_USP, BOOLDEF, CARE_OR_FOLLOW_UP, PROMPTNESS



class UspsForm(forms.ModelForm):
    class Meta:
        model = AllData
        # fields = '__all__'
        exclude = ('district', 'site', 'chws_code', 'visit_type')

        widgets = {
            'date': DateInput(attrs={'id': 'date', 'type': 'date', 'required': "required", 'class': "my-form-control"}),
            'sex': RadioSelect(choices=SEXE, attrs={'required': "required"}),
            'ac_nc': RadioSelect(choices=ACNC, attrs={'required': "required"}),
            'pregnant_or_postpartum': Select(choices=ENCEINTE_POSTPARTUM_USP, attrs={'id': "pregnant_or_postpartum", 'class': "my-form-control", 'onChange': "getUspEnceinteOuPostpartum()"}),
            'reference': RadioSelect(choices=BOOLDEF, attrs={'required': "required"}),
            'care_or_follow_up': RadioSelect(choices=CARE_OR_FOLLOW_UP, attrs={'required': "required", 'onchange': 'getNewUspSoinsOuSuivi()'}),
            'promptness': Select(choices=PROMPTNESS, attrs={'required': "required", 'class': "my-form-control"}),
            'syndromes_infectieux': CheckboxInput(attrs={'type': 'checkbox', 'value': '1', 'id': "syndromes_infectieux"}),
            'ist': CheckboxInput(attrs={'type': 'checkbox', 'value': '1', 'id': "ist"}),
            'comment': Textarea(attrs={'cols': 25, 'rows': 2, 'class': "form-control"}),
        }



class UspsMotifsForm(forms.ModelForm):
    class Meta:
        model = CountPaperData
        # fields = '__all__'
        exclude = ('district', 'site', 'year', 'month')

        widgets = {
            'care_or_follow_up': RadioSelect(choices=CARE_OR_FOLLOW_UP, attrs={'required': "required", 'onchange': 'getNewUspSoinsOuSuivi()'}),
            'promptness': RadioSelect(choices=PROMPTNESS, attrs={'required': "required"}),
        }

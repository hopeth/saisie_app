from django import forms
from django.conf import settings
from django.forms import ModelForm, Textarea, CheckboxInput, CheckboxSelectMultiple, SelectMultiple, Select, RadioSelect

from django.forms.widgets import DateInput, SelectDateWidget

from chws.models import AllData
from si.models import PfList, PromptnessList, PregnantPostpartumList, CareOrFollowUpList, SEXE, ACNC, ENCEINTE_POSTPARTUM, BOOLDEF, CARE_OR_FOLLOW_UP, PROMPTNESS



class ChwsForm(forms.ModelForm):
    class Meta:
        model = AllData
        # fields = '__all__'
        exclude = ('district', 'site', 'chws_code', 'visit_type', 'pf_administered')
        # fields = ("titre", "auteur", "contenu", "date", "email")
        widgets = {
            # 'district': Select(attrs={'id': "district", 'onChange': "ActiveAjax(this.id, this.value)", 'class': "my-form-control", 'required': "required"}),
            'date': DateInput(attrs={'id': 'date', 'type': 'date', 'required': "required", 'class': "my-form-control"}),
            'sex': RadioSelect(choices=SEXE, attrs={'required': "required"}),
            'ac_nc': RadioSelect(choices=ACNC, attrs={'required': "required"}),
            'pregnant_or_postpartum': Select(choices=ENCEINTE_POSTPARTUM, attrs={'id': "pregnant_or_postpartum", 'class': "my-form-control", 'onChange': "getNewEnceinteOuPostpartum()"}),
            'pf_administered_yes_or_no': RadioSelect(choices=BOOLDEF, attrs={'required': "required", 'onchange': "getNewPfAdministreeOrNot(); ActiveAjax(this.id, this.value)"}),
            'counciling': RadioSelect(choices=BOOLDEF, attrs={'required': "required"}),
            'reference': RadioSelect(choices=BOOLDEF, attrs={'required': "required"}),
            'reference': RadioSelect(choices=BOOLDEF, attrs={'required': "required"}),
            'care_or_follow_up': RadioSelect(choices=CARE_OR_FOLLOW_UP, attrs={'required': "required", 'onchange': 'getNewSoinsOuSuivi()'}),
            'promptness': RadioSelect(choices=PROMPTNESS, attrs={'required': "required"}),
            'pregnancy_test': CheckboxInput(attrs={'type': 'checkbox', 'value': '1', 'id': "pregnancy_test"}),
            'ptme': CheckboxInput(attrs={'type': 'checkbox', 'value': '1', 'id': "ptme"}),
            'comment': Textarea(attrs={'cols': 25, 'rows': 2, 'class': "form-control"}),
        }


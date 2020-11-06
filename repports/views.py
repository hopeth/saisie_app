from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from .models import IndicatorsList
from chws.models import AllData
import os

from django.contrib import messages

@login_required
def dashboard(request):
    datas = IndicatorsList.objects.all()

    return render(request, 'repports/dashboard.html', {"datas": datas})


def create_db_csv_file(request):
    import csv
    import pandas as pd

    def csv_dir(file=""):
        if file != "":
            return os.path.join(os.path.abspath(os.path.dirname('static/csv_files/')), file)

    data = pd.read_csv(csv_dir('saisie_data.csv'))
    data.to_csv(csv_dir('saisie_copy.csv'), index=False)
    messages.success(request, "CSV créé avec succès! Chemin: {}".format(csv_dir('saisie_copy.csv')))
    return redirect('/')



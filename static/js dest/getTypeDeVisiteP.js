function getTypeofvisitP() {
	if (document.getElementById('visit_type').options[document.getElementById('visit_type').selectedIndex].value == '1') {

		document.getElementById('label_sex').style.display = 'block';
		document.getElementById('sexe_M').checked = '';
		document.getElementById('sexe_F').checked = '';
		document.getElementById('sexe_N').checked = '';
		document.getElementById('sexe_M').required = 'required';
		document.getElementById('sexe_F').required = 'required';
		document.getElementById('sexe_N').required = 'required';

		document.getElementById('age').style.display = 'block';
		document.getElementById('age_year').value = '';
		document.getElementById('age_month').value = '';
		document.getElementById('age_semaine').value = '';
		document.getElementById('age_jour').value = '';

		document.getElementById('label_save_while_value').style.display = 'none';
		document.getElementById('save_while_value').style.display = 'none';
		document.getElementById('save_while_value').value = '';

		document.getElementById('label_ac_nc').style.display = 'block';
		document.getElementById('ac').checked = '';
		document.getElementById('nc').checked = '';
		document.getElementById('nr').checked = '';
		document.getElementById('ac').required = 'required';
		document.getElementById('nc').required = 'required';
		document.getElementById('nr').required = 'required';

		document.getElementById('all_motif_consultation').style.display = 'block';
		document.getElementById('diarrhee').checked = '';
		document.getElementById('malnutrition').checked = '';
		document.getElementById('paludisme').checked = '';
		document.getElementById('pneumonie').checked = '';
		document.getElementById('fievre_simple').checked = '';
		document.getElementById('toux_ou_rhume').checked = '';
		document.getElementById('signe_de_danger').checked = '';
		document.getElementById('autre').checked = '';
		document.getElementById('motif_nr').checked = '';

		document.getElementById('les_autres_motifs').style.display = 'none';
		document.getElementById('les_autres_motifs_2').style.display = 'none';

		document.getElementById('label_pregnant_or_postpartum').style.display = 'none';
		document.getElementById('pregnant_or_postpartum').value = '';
		document.getElementById('pregnant_or_postpartum').required = '';



		document.getElementById('pf_administree_oui_ou_non').style.display = 'none';
		document.getElementById('pf_administree_oui').checked = '';
		document.getElementById('pf_administree_non').checked = '';
		document.getElementById('pf_administree_nr').checked = '';
		document.getElementById('pf_administree_oui').required = '';
		document.getElementById('pf_administree_non').required = '';
		document.getElementById('pf_administree_nr').required = '';

		document.getElementById('label_pf_administree').style.display = 'none';
		document.getElementById('pf_administree').value = '';
		document.getElementById('pf_administree').required = '';

		document.getElementById('label_pf_non_administre').style.display = 'none';
		document.getElementById('pf_non_administree').value = '';
		document.getElementById('pf_non_administree').required = '';




		document.getElementById('label_pregnancy_test').style.display = 'none';
		document.getElementById('pregnancy_test').checked = '';
		document.getElementById('pregnancy_test').required = '';

		document.getElementById('label_ptme').style.display = 'none';
		document.getElementById('ptme').checked = '';
		document.getElementById('ptme').required = '';

		document.getElementById('label_counciling').style.display = 'none';
		document.getElementById('counciling_true').checked = '';
		document.getElementById('counciling_false').checked = '';
		document.getElementById('counciling_NR').checked = '';
		document.getElementById('counciling_true').required = '';
		document.getElementById('counciling_false').required = '';
		document.getElementById('counciling_NR').required = '';

		document.getElementById('label_reference').style.display = 'none';
		document.getElementById('refere_pour_pf_true').checked = '';
		document.getElementById('refere_pour_pf_false').checked = '';
		document.getElementById('refere_pour_pf_NR').checked = '';
		document.getElementById('refere_pour_pf_true').required = '';
		document.getElementById('refere_pour_pf_false').required = '';
		document.getElementById('refere_pour_pf_NR').required = '';

		document.getElementById('label_reference').style.display = 'block';
		document.getElementById('refere_par_un_asc_true').checked = '';
		document.getElementById('refere_par_un_asc_false').checked = '';
		document.getElementById('refere_par_un_asc_NR').checked = '';
		document.getElementById('refere_par_un_asc_true').required = 'required';
		document.getElementById('refere_par_un_asc_false').required = 'required';
		document.getElementById('refere_par_un_asc_NR').required = 'required';

		document.getElementById('label_care_or_follow_up').style.display = 'block';
		document.getElementById('soins').checked = '';
		document.getElementById('suivi').checked = '';
		document.getElementById('ss_NR').checked = '';
		document.getElementById('soins').required = 'required';
		document.getElementById('suivi').required = 'required';
		document.getElementById('ss_NR').required = 'required';



		document.getElementById('label_promptness').style.display = 'block';
		document.getElementById('promptness_24').checked = '';
		document.getElementById('promptness_48').checked = '';
		document.getElementById('promptness_72').checked = '';
		document.getElementById('promptness_sup_72').checked = '';
		document.getElementById('promptness_NA').checked = '';
		document.getElementById('promptness_NR').checked = '';
		document.getElementById('promptness_24').required = 'required';
		document.getElementById('promptness_48').required = 'required';
		document.getElementById('promptness_72').required = 'required';
		document.getElementById('promptness_sup_72').required = 'required';
		document.getElementById('promptness_NA').required = 'required';
		document.getElementById('promptness_NR').required = 'required';

	} else if (document.getElementById('visit_type').options[document.getElementById('visit_type').selectedIndex].value == '2') {

		document.getElementById('label_sex').style.display = 'none';
		document.getElementById('sexe_M').checked = '';
		document.getElementById('sexe_F').checked = 'checked';
		document.getElementById('sexe_N').checked = '';
		document.getElementById('sexe_M').required = '';
		document.getElementById('sexe_F').required = 'required';
		document.getElementById('sexe_N').required = '';

		document.getElementById('age').style.display = 'block';
		document.getElementById('age_year').value = '';
		document.getElementById('age_month').value = '';
		document.getElementById('age_semaine').value = '';
		document.getElementById('age_jour').value = '';

		document.getElementById('label_save_while_value').style.display = 'none';
		document.getElementById('save_while_value').style.display = 'none';
		document.getElementById('save_while_value').value = '';

		document.getElementById('label_ac_nc').style.display = 'block';
		document.getElementById('ac').checked = '';
		document.getElementById('nc').checked = '';
		document.getElementById('nr').checked = '';
		document.getElementById('ac').required = 'required';
		document.getElementById('nc').required = 'required';
		document.getElementById('nr').required = 'required';

		document.getElementById('all_motif_consultation').style.display = 'block';
		document.getElementById('diarrhee').checked = '';
		document.getElementById('malnutrition').checked = '';
		document.getElementById('paludisme').checked = '';
		document.getElementById('pneumonie').checked = '';
		document.getElementById('fievre_simple').checked = '';
		document.getElementById('toux_ou_rhume').checked = '';
		document.getElementById('signe_de_danger').checked = '';
		document.getElementById('autre').checked = '';
		document.getElementById('motif_nr').checked = '';

		document.getElementById('les_autres_motifs').style.display = 'block';
		document.getElementById('les_autres_motifs_2').style.display = 'block';

		document.getElementById('label_pregnant_or_postpartum').style.display = 'block';
		document.getElementById('pregnant_or_postpartum').value = '';
		document.getElementById('pregnant_or_postpartum').required = '';



		document.getElementById('pf_administree_oui_ou_non').style.display = 'none';
		document.getElementById('pf_administree_oui').checked = '';
		document.getElementById('pf_administree_non').checked = '';
		document.getElementById('pf_administree_nr').checked = '';
		document.getElementById('pf_administree_oui').required = '';
		document.getElementById('pf_administree_non').required = '';
		document.getElementById('pf_administree_nr').required = '';

		document.getElementById('label_pf_administree').style.display = 'none';
		document.getElementById('pf_administree').value = '';
		document.getElementById('pf_administree').required = '';

		document.getElementById('label_pf_non_administre').style.display = 'none';
		document.getElementById('pf_non_administree').value = '';
		document.getElementById('pf_non_administree').required = '';




		document.getElementById('label_pregnancy_test').style.display = 'block';
		document.getElementById('pregnancy_test').checked = '';
		document.getElementById('pregnancy_test').required = '';

		document.getElementById('label_ptme').style.display = 'block';
		document.getElementById('ptme').checked = '';
		document.getElementById('ptme').required = '';

		document.getElementById('label_counciling').style.display = 'none';
		document.getElementById('counciling_true').checked = '';
		document.getElementById('counciling_false').checked = '';
		document.getElementById('counciling_NR').checked = '';
		document.getElementById('counciling_true').required = '';
		document.getElementById('counciling_false').required = '';
		document.getElementById('counciling_NR').required = '';

		document.getElementById('label_reference').style.display = 'none';
		document.getElementById('refere_pour_pf_true').checked = '';
		document.getElementById('refere_pour_pf_false').checked = '';
		document.getElementById('refere_pour_pf_NR').checked = '';
		document.getElementById('refere_pour_pf_true').required = '';
		document.getElementById('refere_pour_pf_false').required = '';
		document.getElementById('refere_pour_pf_NR').required = '';

		document.getElementById('label_reference').style.display = 'block';
		document.getElementById('refere_par_un_asc_true').checked = '';
		document.getElementById('refere_par_un_asc_false').checked = '';
		document.getElementById('refere_par_un_asc_NR').checked = '';
		document.getElementById('refere_par_un_asc_true').required = 'required';
		document.getElementById('refere_par_un_asc_false').required = 'required';
		document.getElementById('refere_par_un_asc_NR').required = 'required';

		document.getElementById('label_care_or_follow_up').style.display = 'none';
		document.getElementById('soins').checked = '';
		document.getElementById('suivi').checked = 'checked';
		document.getElementById('ss_NR').checked = '';
		document.getElementById('soins').required = 'required';
		document.getElementById('suivi').required = 'required';
		document.getElementById('ss_NR').required = 'required';


		document.getElementById('label_promptness').style.display = 'none';
		document.getElementById('promptness_24').checked = '';
		document.getElementById('promptness_48').checked = '';
		document.getElementById('promptness_72').checked = '';
		document.getElementById('promptness_sup_72').checked = '';
		document.getElementById('promptness_NA').checked = 'checked';
		document.getElementById('promptness_NR').checked = '';
		document.getElementById('promptness_24').required = 'required';
		document.getElementById('promptness_48').required = 'required';
		document.getElementById('promptness_72').required = 'required';
		document.getElementById('promptness_sup_72').required = 'required';
		document.getElementById('promptness_NA').required = 'required';
		document.getElementById('promptness_NR').required = 'required';

	} else if (document.getElementById('visit_type').options[document.getElementById('visit_type').selectedIndex].value == '3') {

		document.getElementById('label_sex').style.display = 'none';
		document.getElementById('sexe_M').checked = '';
		document.getElementById('sexe_F').checked = 'checked';
		document.getElementById('sexe_N').checked = '';
		document.getElementById('sexe_M').required = '';
		document.getElementById('sexe_F').required = 'required';
		document.getElementById('sexe_N').required = '';

		document.getElementById('age').style.display = 'block';
		document.getElementById('age_year').value = '';
		document.getElementById('age_month').value = '';
		document.getElementById('age_semaine').value = '';
		document.getElementById('age_jour').value = '';

		document.getElementById('label_save_while_value').style.display = 'none';
		document.getElementById('save_while_value').style.display = 'none';
		document.getElementById('save_while_value').value = '';

		document.getElementById('label_ac_nc').style.display = 'block';
		document.getElementById('ac').checked = '';
		document.getElementById('nc').checked = '';
		document.getElementById('nr').checked = '';
		document.getElementById('ac').required = 'required';
		document.getElementById('nc').required = 'required';
		document.getElementById('nr').required = 'required';

		document.getElementById('all_motif_consultation').style.display = 'block';
		document.getElementById('diarrhee').checked = '';
		document.getElementById('malnutrition').checked = '';
		document.getElementById('paludisme').checked = '';
		document.getElementById('pneumonie').checked = '';
		document.getElementById('fievre_simple').checked = '';
		document.getElementById('toux_ou_rhume').checked = '';
		document.getElementById('signe_de_danger').checked = '';
		document.getElementById('autre').checked = '';
		document.getElementById('motif_nr').checked = '';

		document.getElementById('les_autres_motifs').style.display = 'block';
		document.getElementById('les_autres_motifs_2').style.display = 'none';

		document.getElementById('label_pregnant_or_postpartum').style.display = 'none';
		document.getElementById('pregnant_or_postpartum').value = '';
		document.getElementById('pregnant_or_postpartum').required = '';



		document.getElementById('pf_administree_oui_ou_non').style.display = 'block';
		document.getElementById('pf_administree_oui').checked = '';
		document.getElementById('pf_administree_non').checked = '';
		document.getElementById('pf_administree_nr').checked = '';
		document.getElementById('pf_administree_oui').required = 'required';
		document.getElementById('pf_administree_non').required = 'required';
		document.getElementById('pf_administree_nr').required = 'required';

		document.getElementById('label_pf_administree').style.display = 'none';
		document.getElementById('pf_administree').value = '';
		document.getElementById('pf_administree').required = '';

		document.getElementById('label_pf_non_administre').style.display = 'none';
		document.getElementById('pf_non_administree').value = '';
		document.getElementById('pf_non_administree').required = '';




		document.getElementById('label_pregnancy_test').style.display = 'none';
		document.getElementById('pregnancy_test').checked = '';
		document.getElementById('pregnancy_test').required = '';

		document.getElementById('label_ptme').style.display = 'none';
		document.getElementById('ptme').checked = '';
		document.getElementById('ptme').required = '';

		document.getElementById('label_counciling').style.display = 'block';
		document.getElementById('counciling_true').checked = '';
		document.getElementById('counciling_false').checked = '';
		document.getElementById('counciling_NR').checked = '';
		document.getElementById('counciling_true').required = 'required';
		document.getElementById('counciling_false').required = 'required';
		document.getElementById('counciling_NR').required = 'required';

		document.getElementById('label_reference').style.display = 'block';
		document.getElementById('refere_pour_pf_true').checked = '';
		document.getElementById('refere_pour_pf_false').checked = '';
		document.getElementById('refere_pour_pf_NR').checked = '';
		document.getElementById('refere_pour_pf_true').required = 'required';
		document.getElementById('refere_pour_pf_false').required = 'required';
		document.getElementById('refere_pour_pf_NR').required = 'required';

		document.getElementById('label_reference').style.display = 'none';
		document.getElementById('refere_par_un_asc_true').checked = '';
		document.getElementById('refere_par_un_asc_false').checked = '';
		document.getElementById('refere_par_un_asc_NR').checked = '';
		document.getElementById('refere_par_un_asc_true').required = '';
		document.getElementById('refere_par_un_asc_false').required = '';
		document.getElementById('refere_par_un_asc_NR').required = '';

		document.getElementById('label_care_or_follow_up').style.display = 'none';
		document.getElementById('soins').checked = '';
		document.getElementById('suivi').checked = 'checked';
		document.getElementById('ss_NR').checked = '';
		document.getElementById('soins').required = 'required';
		document.getElementById('suivi').required = 'required';
		document.getElementById('ss_NR').required = 'required';

		document.getElementById('label_promptness').style.display = 'none';
		document.getElementById('promptness_24').checked = '';
		document.getElementById('promptness_48').checked = '';
		document.getElementById('promptness_72').checked = '';
		document.getElementById('promptness_sup_72').checked = '';
		document.getElementById('promptness_NA').checked = 'checked';
		document.getElementById('promptness_NR').checked = '';
		document.getElementById('promptness_24').required = 'required';
		document.getElementById('promptness_48').required = 'required';
		document.getElementById('promptness_72').required = 'required';
		document.getElementById('promptness_sup_72').required = 'required';
		document.getElementById('promptness_NA').required = 'required';
		document.getElementById('promptness_NR').required = 'required';

	} else if (document.getElementById('visit_type').options[document.getElementById('visit_type').selectedIndex].value == '4') {

		document.getElementById('label_sex').style.display = 'none';
		document.getElementById('sexe_M').checked = '';
		document.getElementById('sexe_F').checked = '';
		document.getElementById('sexe_N').checked = '';
		document.getElementById('sexe_M').required = '';
		document.getElementById('sexe_F').required = '';
		document.getElementById('sexe_N').required = '';

		document.getElementById('age').style.display = 'none';
		document.getElementById('age_year').value = '';
		document.getElementById('age_month').value = '';
		document.getElementById('age_semaine').value = '';
		document.getElementById('age_jour').value = '';

		document.getElementById('label_save_while_value').style.display = 'block';
		document.getElementById('save_while_value').style.display = 'block';
		document.getElementById('save_while_value').value = '';

		document.getElementById('label_ac_nc').style.display = 'none';
		document.getElementById('ac').checked = '';
		document.getElementById('nc').checked = '';
		document.getElementById('nr').checked = '';
		document.getElementById('ac').required = '';
		document.getElementById('nc').required = '';
		document.getElementById('nr').required = '';

		document.getElementById('all_motif_consultation').style.display = 'none';
		document.getElementById('diarrhee').checked = '';
		document.getElementById('malnutrition').checked = '';
		document.getElementById('paludisme').checked = '';
		document.getElementById('pneumonie').checked = '';
		document.getElementById('fievre_simple').checked = '';
		document.getElementById('toux_ou_rhume').checked = '';
		document.getElementById('signe_de_danger').checked = '';
		document.getElementById('autre').checked = '';
		document.getElementById('motif_nr').checked = '';

		document.getElementById('label_pregnant_or_postpartum').style.display = 'none';
		document.getElementById('pregnant_or_postpartum').value = '';
		document.getElementById('pregnant_or_postpartum').required = '';



		document.getElementById('pf_administree_oui_ou_non').style.display = 'none';
		document.getElementById('pf_administree_oui').checked = '';
		document.getElementById('pf_administree_non').checked = '';
		document.getElementById('pf_administree_nr').checked = '';
		document.getElementById('pf_administree_oui').required = '';
		document.getElementById('pf_administree_non').required = '';
		document.getElementById('pf_administree_nr').required = '';

		document.getElementById('label_pf_administree').style.display = 'none';
		document.getElementById('pf_administree').value = '';
		document.getElementById('pf_administree').required = '';

		document.getElementById('label_pf_non_administre').style.display = 'none';
		document.getElementById('pf_non_administree').value = '';
		document.getElementById('pf_non_administree').required = '';



		document.getElementById('les_autres_motifs').style.display = 'none';
		document.getElementById('les_autres_motifs_2').style.display = 'none';

		document.getElementById('label_pregnancy_test').style.display = 'none';
		document.getElementById('pregnancy_test').checked = '';
		document.getElementById('pregnancy_test').required = '';

		document.getElementById('label_ptme').style.display = 'none';
		document.getElementById('ptme').checked = '';
		document.getElementById('ptme').required = '';

		document.getElementById('label_counciling').style.display = 'none';
		document.getElementById('counciling_true').checked = '';
		document.getElementById('counciling_false').checked = '';
		document.getElementById('counciling_NR').checked = '';
		document.getElementById('counciling_true').required = '';
		document.getElementById('counciling_false').required = '';
		document.getElementById('counciling_NR').required = '';

		document.getElementById('label_reference').style.display = 'none';
		document.getElementById('refere_pour_pf_true').checked = '';
		document.getElementById('refere_pour_pf_false').checked = '';
		document.getElementById('refere_pour_pf_NR').checked = '';
		document.getElementById('refere_pour_pf_true').required = '';
		document.getElementById('refere_pour_pf_false').required = '';
		document.getElementById('refere_pour_pf_NR').required = '';

		document.getElementById('label_reference').style.display = 'none';
		document.getElementById('refere_par_un_asc_true').checked = '';
		document.getElementById('refere_par_un_asc_false').checked = '';
		document.getElementById('refere_par_un_asc_NR').checked = '';
		document.getElementById('refere_par_un_asc_true').required = '';
		document.getElementById('refere_par_un_asc_false').required = '';
		document.getElementById('refere_par_un_asc_NR').required = '';

		document.getElementById('label_care_or_follow_up').style.display = 'none';
		document.getElementById('soins').checked = '';
		document.getElementById('suivi').checked = '';
		document.getElementById('ss_NR').checked = '';
		document.getElementById('soins').required = '';
		document.getElementById('suivi').required = '';
		document.getElementById('ss_NR').required = '';

		document.getElementById('label_promptness').style.display = 'none';
		document.getElementById('promptness_24').checked = '';
		document.getElementById('promptness_48').checked = '';
		document.getElementById('promptness_72').checked = '';
		document.getElementById('promptness_sup_72').checked = '';
		document.getElementById('promptness_NA').checked = '';
		document.getElementById('promptness_NR').checked = '';
		document.getElementById('promptness_24').required = '';
		document.getElementById('promptness_48').required = '';
		document.getElementById('promptness_72').required = '';
		document.getElementById('promptness_sup_72').required = '';
		document.getElementById('promptness_NA').required = '';
		document.getElementById('promptness_NR').required = '';

	} else if (document.getElementById('visit_type').options[document.getElementById('visit_type').selectedIndex].value == '5') {

		document.getElementById('label_sex').style.display = 'none';
		document.getElementById('sexe_M').checked = '';
		document.getElementById('sexe_F').checked = '';
		document.getElementById('sexe_N').checked = '';
		document.getElementById('sexe_M').required = '';
		document.getElementById('sexe_F').required = '';
		document.getElementById('sexe_N').required = '';

		document.getElementById('age').style.display = 'none';
		document.getElementById('age_year').value = '';
		document.getElementById('age_month').value = '';
		document.getElementById('age_semaine').value = '';
		document.getElementById('age_jour').value = '';

		document.getElementById('label_save_while_value').style.display = 'none';
		document.getElementById('save_while_value').style.display = 'none';
		document.getElementById('save_while_value').value = '';

		document.getElementById('label_ac_nc').style.display = 'none';
		document.getElementById('ac').checked = '';
		document.getElementById('nc').checked = '';
		document.getElementById('nr').checked = '';
		document.getElementById('ac').required = '';
		document.getElementById('nc').required = '';
		document.getElementById('nr').required = '';

		document.getElementById('all_motif_consultation').style.display = 'none';
		document.getElementById('diarrhee').checked = '';
		document.getElementById('malnutrition').checked = '';
		document.getElementById('paludisme').checked = '';
		document.getElementById('pneumonie').checked = '';
		document.getElementById('fievre_simple').checked = '';
		document.getElementById('toux_ou_rhume').checked = '';
		document.getElementById('signe_de_danger').checked = '';
		document.getElementById('autre').checked = '';
		document.getElementById('motif_nr').checked = '';

		document.getElementById('label_pregnant_or_postpartum').style.display = 'none';
		document.getElementById('pregnant_or_postpartum').value = '';
		document.getElementById('pregnant_or_postpartum').required = '';



		document.getElementById('pf_administree_oui_ou_non').style.display = 'none';
		document.getElementById('pf_administree_oui').checked = '';
		document.getElementById('pf_administree_non').checked = '';
		document.getElementById('pf_administree_nr').checked = '';
		document.getElementById('pf_administree_oui').required = '';
		document.getElementById('pf_administree_non').required = '';
		document.getElementById('pf_administree_nr').required = '';

		document.getElementById('label_pf_administree').style.display = 'none';
		document.getElementById('pf_administree').value = '';
		document.getElementById('pf_administree').required = '';

		document.getElementById('label_pf_non_administre').style.display = 'none';
		document.getElementById('pf_non_administree').value = '';
		document.getElementById('pf_non_administree').required = '';



		document.getElementById('les_autres_motifs').style.display = 'none';
		document.getElementById('les_autres_motifs_2').style.display = 'none';

		document.getElementById('label_pregnancy_test').style.display = 'none';
		document.getElementById('pregnancy_test').checked = '';
		document.getElementById('pregnancy_test').required = '';

		document.getElementById('label_ptme').style.display = 'none';
		document.getElementById('ptme').checked = '';
		document.getElementById('ptme').required = '';

		document.getElementById('label_counciling').style.display = 'none';
		document.getElementById('counciling_true').checked = '';
		document.getElementById('counciling_false').checked = '';
		document.getElementById('counciling_NR').checked = '';
		document.getElementById('counciling_true').required = '';
		document.getElementById('counciling_false').required = '';
		document.getElementById('counciling_NR').required = '';

		document.getElementById('label_reference').style.display = 'none';
		document.getElementById('refere_pour_pf_true').checked = '';
		document.getElementById('refere_pour_pf_false').checked = '';
		document.getElementById('refere_pour_pf_NR').checked = '';
		document.getElementById('refere_pour_pf_true').required = '';
		document.getElementById('refere_pour_pf_false').required = '';
		document.getElementById('refere_pour_pf_NR').required = '';

		document.getElementById('label_reference').style.display = 'none';
		document.getElementById('refere_par_un_asc_true').checked = '';
		document.getElementById('refere_par_un_asc_false').checked = '';
		document.getElementById('refere_par_un_asc_NR').checked = '';
		document.getElementById('refere_par_un_asc_true').required = '';
		document.getElementById('refere_par_un_asc_false').required = '';
		document.getElementById('refere_par_un_asc_NR').required = '';

		document.getElementById('label_care_or_follow_up').style.display = 'none';
		document.getElementById('soins').checked = '';
		document.getElementById('suivi').checked = '';
		document.getElementById('ss_NR').checked = '';
		document.getElementById('soins').required = '';
		document.getElementById('suivi').required = '';
		document.getElementById('ss_NR').required = '';

		document.getElementById('label_promptness').style.display = 'none';
		document.getElementById('promptness_24').checked = '';
		document.getElementById('promptness_48').checked = '';
		document.getElementById('promptness_72').checked = '';
		document.getElementById('promptness_sup_72').checked = '';
		document.getElementById('promptness_NA').checked = '';
		document.getElementById('promptness_NR').checked = '';
		document.getElementById('promptness_24').required = '';
		document.getElementById('promptness_48').required = '';
		document.getElementById('promptness_72').required = '';
		document.getElementById('promptness_sup_72').required = '';
		document.getElementById('promptness_NA').required = '';
		document.getElementById('promptness_NR').required = '';

	} else {
		document.getElementById('label_sex').style.display = 'none';
		document.getElementById('sexe_M').checked = '';
		document.getElementById('sexe_F').checked = '';
		document.getElementById('sexe_N').checked = '';
		document.getElementById('sexe_M').required = '';
		document.getElementById('sexe_F').required = '';
		document.getElementById('sexe_N').required = '';

		document.getElementById('age').style.display = 'none';
		document.getElementById('age_year').value = '';
		document.getElementById('age_month').value = '';
		document.getElementById('age_semaine').value = '';
		document.getElementById('age_jour').value = '';

		document.getElementById('label_save_while_value').style.display = 'none';
		document.getElementById('save_while_value').style.display = 'none';
		document.getElementById('save_while_value').value = '';

		document.getElementById('label_ac_nc').style.display = 'none';
		document.getElementById('ac').checked = '';
		document.getElementById('nc').checked = '';
		document.getElementById('nr').checked = '';
		document.getElementById('ac').required = '';
		document.getElementById('nc').required = '';
		document.getElementById('nr').required = '';

		document.getElementById('all_motif_consultation').style.display = 'none';
		document.getElementById('diarrhee').checked = '';
		document.getElementById('malnutrition').checked = '';
		document.getElementById('paludisme').checked = '';
		document.getElementById('pneumonie').checked = '';
		document.getElementById('fievre_simple').checked = '';
		document.getElementById('toux_ou_rhume').checked = '';
		document.getElementById('signe_de_danger').checked = '';
		document.getElementById('autre').checked = '';
		document.getElementById('motif_nr').checked = '';

		document.getElementById('label_pregnant_or_postpartum').style.display = 'none';
		document.getElementById('pregnant_or_postpartum').value = '';
		document.getElementById('pregnant_or_postpartum').required = '';

		document.getElementById('label_pf').style.display = 'none';
		document.getElementById('pf').value = '';
		document.getElementById('pf').required = '';

		document.getElementById('les_autres_motifs').style.display = 'none';
		document.getElementById('les_autres_motifs_2').style.display = 'none';

		document.getElementById('label_pregnancy_test').style.display = 'none';
		document.getElementById('pregnancy_test').checked = '';
		document.getElementById('pregnancy_test').required = '';

		document.getElementById('label_ptme').style.display = 'none';
		document.getElementById('ptme').checked = '';
		document.getElementById('ptme').required = '';

		document.getElementById('label_counciling').style.display = 'none';
		document.getElementById('counciling_true').checked = '';
		document.getElementById('counciling_false').checked = '';
		document.getElementById('counciling_NR').checked = '';
		document.getElementById('counciling_true').required = '';
		document.getElementById('counciling_false').required = '';
		document.getElementById('counciling_NR').required = '';

		document.getElementById('label_reference').style.display = 'none';
		document.getElementById('refere_pour_pf_true').checked = '';
		document.getElementById('refere_pour_pf_false').checked = '';
		document.getElementById('refere_pour_pf_NR').checked = '';
		document.getElementById('refere_pour_pf_true').required = '';
		document.getElementById('refere_pour_pf_false').required = '';
		document.getElementById('refere_pour_pf_NR').required = '';

		document.getElementById('label_reference').style.display = 'none';
		document.getElementById('refere_par_un_asc_true').checked = '';
		document.getElementById('refere_par_un_asc_false').checked = '';
		document.getElementById('refere_par_un_asc_NR').checked = '';
		document.getElementById('refere_par_un_asc_true').required = '';
		document.getElementById('refere_par_un_asc_false').required = '';
		document.getElementById('refere_par_un_asc_NR').required = '';

		document.getElementById('label_care_or_follow_up').style.display = 'none';
		document.getElementById('soins').checked = '';
		document.getElementById('suivi').checked = '';
		document.getElementById('ss_NR').checked = '';
		document.getElementById('soins').required = '';
		document.getElementById('suivi').required = '';
		document.getElementById('ss_NR').required = '';

		document.getElementById('label_promptness').style.display = 'none';
		document.getElementById('promptness_24').checked = '';
		document.getElementById('promptness_48').checked = '';
		document.getElementById('promptness_72').checked = '';
		document.getElementById('promptness_sup_72').checked = '';
		document.getElementById('promptness_NA').checked = '';
		document.getElementById('promptness_NR').checked = '';
		document.getElementById('promptness_24').required = '';
		document.getElementById('promptness_48').required = '';
		document.getElementById('promptness_72').required = '';
		document.getElementById('promptness_sup_72').required = '';
		document.getElementById('promptness_NA').required = '';
		document.getElementById('promptness_NR').required = '';

	}
}

function getNewtypeofvisitUpdate() {
	document.getElementById('id_comment').required = '';

	if (document.getElementById('visit_type').options[document.getElementById('visit_type').selectedIndex].value == '1') {
		document.getElementById('id_sex_0').required = 'required';
		document.getElementById('id_sex_1').required = 'required';
		document.getElementById('id_sex_2').required = 'required';

		document.getElementById('id_ac_nc_1').required = 'required';
		document.getElementById('id_ac_nc_0').required = 'required';
		document.getElementById('id_ac_nc_2').required = 'required';

		document.getElementById('pregnant_or_postpartum').required = '';

		document.getElementById('id_pf_administered_yes_or_no_0').required = '';
		document.getElementById('id_pf_administered_yes_or_no_1').required = '';
		document.getElementById('id_pf_administered_yes_or_no_2').required = '';

		document.getElementById('pf_administered').required = '';
		document.getElementById('pregnancy_test').required = '';
		document.getElementById('ptme').required = '';

		document.getElementById('id_counciling_0').required = '';
		document.getElementById('id_counciling_1').required = '';
		document.getElementById('id_counciling_2').required = '';

		document.getElementById('id_reference_0').required = 'required';
		document.getElementById('id_reference_1').required = 'required';
		document.getElementById('id_reference_2').required = 'required';

		document.getElementById('id_care_or_follow_up_0').required = 'required';
		document.getElementById('id_care_or_follow_up_1').required = 'required';
		document.getElementById('id_care_or_follow_up_2').required = 'required';

		document.getElementById('id_promptness_0').required = 'required';
		document.getElementById('id_promptness_1').required = 'required';
		document.getElementById('id_promptness_2').required = 'required';
		document.getElementById('id_promptness_3').required = 'required';
		document.getElementById('id_promptness_4').required = 'required';
		document.getElementById('id_promptness_5').required = 'required';
	} else if (document.getElementById('visit_type').options[document.getElementById('visit_type').selectedIndex].value == '2') {

		document.getElementById('id_sex_1').checked = 'checked';
		document.getElementById('id_sex_1').required = 'required';

		document.getElementById('id_ac_nc_1').required = 'required';
		document.getElementById('id_ac_nc_0').required = 'required';
		document.getElementById('id_ac_nc_2').required = 'required';

		document.getElementById('pregnant_or_postpartum').required = '';

		document.getElementById('id_pf_administered_yes_or_no_0').required = '';
		document.getElementById('id_pf_administered_yes_or_no_1').required = '';
		document.getElementById('id_pf_administered_yes_or_no_2').required = '';

		document.getElementById('pf_administered').required = '';
		document.getElementById('pregnancy_test').required = '';

		document.getElementById('ptme').required = '';

		document.getElementById('id_counciling_0').required = '';
		document.getElementById('id_counciling_1').required = '';
		document.getElementById('id_counciling_2').required = '';

		document.getElementById('id_reference_0').required = 'required';
		document.getElementById('id_reference_1').required = 'required';
		document.getElementById('id_reference_2').required = 'required';

		document.getElementById('id_care_or_follow_up_1').checked = 'checked';
		document.getElementById('id_care_or_follow_up_0').required = 'required';
		document.getElementById('id_care_or_follow_up_1').required = 'required';
		document.getElementById('id_care_or_follow_up_2').required = 'required';		
		document.getElementById('id_promptness_4').checked = 'checked';
		document.getElementById('id_promptness_0').required = 'required';
		document.getElementById('id_promptness_1').required = 'required';
		document.getElementById('id_promptness_2').required = 'required';
		document.getElementById('id_promptness_3').required = 'required';
		document.getElementById('id_promptness_4').required = 'required';
		document.getElementById('id_promptness_5').required = 'required';

	} else if (document.getElementById('visit_type').options[document.getElementById('visit_type').selectedIndex].value == '3') {

		document.getElementById('id_sex_1').checked = 'checked';
		document.getElementById('id_sex_1').required = 'required';

		document.getElementById('id_ac_nc_1').required = 'required';
		document.getElementById('id_ac_nc_0').required = 'required';
		document.getElementById('id_ac_nc_2').required = 'required';

		document.getElementById('pregnant_or_postpartum').required = '';

		document.getElementById('id_pf_administered_yes_or_no_0').required = 'required';
		document.getElementById('id_pf_administered_yes_or_no_1').required = 'required';
		document.getElementById('id_pf_administered_yes_or_no_2').required = 'required';

		document.getElementById('pf_administered').required = '';
		document.getElementById('pregnancy_test').required = '';
		document.getElementById('ptme').required = '';

		document.getElementById('id_reference_0').required = 'required';
		document.getElementById('id_reference_1').required = 'required';
		document.getElementById('id_reference_2').required = 'required';

		document.getElementById('id_care_or_follow_up_1').checked = 'checked';
		document.getElementById('id_care_or_follow_up_0').required = 'required';
		document.getElementById('id_care_or_follow_up_1').required = 'required';
		document.getElementById('id_care_or_follow_up_2').required = 'required';

		document.getElementById('id_promptness_4').checked = 'checked';
		document.getElementById('id_promptness_0').required = 'required';
		document.getElementById('id_promptness_1').required = 'required';
		document.getElementById('id_promptness_2').required = 'required';
		document.getElementById('id_promptness_3').required = 'required';
		document.getElementById('id_promptness_4').required = 'required';
		document.getElementById('id_promptness_5').required = 'required';

	} else if (document.getElementById('visit_type').options[document.getElementById('visit_type').selectedIndex].value == '4') {

		document.getElementById('id_sex_0').required = '';
		document.getElementById('id_sex_1').required = '';
		document.getElementById('id_sex_2').required = '';

		document.getElementById('id_ac_nc_1').required = '';
		document.getElementById('id_ac_nc_0').required = '';
		document.getElementById('id_ac_nc_2').required = '';

		document.getElementById('pregnant_or_postpartum').required = '';

		document.getElementById('id_pf_administered_yes_or_no_0').required = '';
		document.getElementById('id_pf_administered_yes_or_no_1').required = '';
		document.getElementById('id_pf_administered_yes_or_no_2').required = '';

		document.getElementById('pf_administered').required = '';
		document.getElementById('pregnancy_test').required = '';
		document.getElementById('ptme').required = '';

		document.getElementById('id_counciling_0').required = '';
		document.getElementById('id_counciling_1').required = '';
		document.getElementById('id_counciling_2').required = '';

		document.getElementById('id_reference_0').required = '';
		document.getElementById('id_reference_1').required = '';
		document.getElementById('id_reference_2').required = '';

		document.getElementById('id_care_or_follow_up_0').required = '';
		document.getElementById('id_care_or_follow_up_1').required = '';
		document.getElementById('id_care_or_follow_up_2').required = '';

		document.getElementById('id_promptness_0').required = '';
		document.getElementById('id_promptness_1').required = '';
		document.getElementById('id_promptness_2').required = '';
		document.getElementById('id_promptness_3').required = '';
		document.getElementById('id_promptness_4').required = '';
		document.getElementById('id_promptness_5').required = '';

	} else {

		document.getElementById('id_sex_0').required = '';
		document.getElementById('id_sex_1').required = '';
		document.getElementById('id_sex_2').required = '';

		document.getElementById('id_ac_nc_1').required = '';
		document.getElementById('id_ac_nc_0').required = '';
		document.getElementById('id_ac_nc_2').required = '';

		document.getElementById('pregnant_or_postpartum').required = '';

		document.getElementById('id_pf_administered_yes_or_no_0').required = '';
		document.getElementById('id_pf_administered_yes_or_no_1').required = '';
		document.getElementById('id_pf_administered_yes_or_no_2').required = '';

		document.getElementById('pf_administered').required = '';
		document.getElementById('pregnancy_test').required = '';
		document.getElementById('ptme').required = '';

		document.getElementById('id_counciling_0').required = '';
		document.getElementById('id_counciling_1').required = '';
		document.getElementById('id_counciling_2').required = '';

		document.getElementById('id_reference_0').required = '';
		document.getElementById('id_reference_1').required = '';
		document.getElementById('id_reference_2').required = '';

		document.getElementById('id_care_or_follow_up_0').required = '';
		document.getElementById('id_care_or_follow_up_1').required = '';
		document.getElementById('id_care_or_follow_up_2').required = '';

		document.getElementById('id_promptness_0').required = '';
		document.getElementById('id_promptness_1').required = '';
		document.getElementById('id_promptness_2').required = '';
		document.getElementById('id_promptness_3').required = '';
		document.getElementById('id_promptness_4').required = '';
		document.getElementById('id_promptness_5').required = '';

	}
};

function getNewtypeofvisit() {document.getElementById('id_comment').required = '';

	if (document.getElementById('visit_type').options[document.getElementById('visit_type').selectedIndex].value == '1') {
		document.getElementById('label_sex').style.display = 'block';
		document.getElementById('id_sex_0').checked = '';
		document.getElementById('id_sex_1').checked = '';
		document.getElementById('id_sex_2').checked = '';
		document.getElementById('id_sex_0').required = 'required';
		document.getElementById('id_sex_1').required = 'required';
		document.getElementById('id_sex_2').required = 'required';

		document.getElementById('label_ac_nc').style.display = 'block';
		document.getElementById('id_ac_nc_1').checked = '';
		document.getElementById('id_ac_nc_0').checked = '';
		document.getElementById('id_ac_nc_2').checked = '';
		document.getElementById('id_ac_nc_1').required = 'required';
		document.getElementById('id_ac_nc_0').required = 'required';
		document.getElementById('id_ac_nc_2').required = 'required';

		document.getElementById('age').style.display = 'block';
		document.getElementById('age_year').value = '';
		document.getElementById('age_month').value = '';
		document.getElementById('age_semaine').value = '';
		document.getElementById('age_jour').value = '';

		document.getElementById('label_save_while_value').style.display = 'none';
		document.getElementById('save_while_value').style.display = 'none';
		document.getElementById('save_while_value').value = '';

		document.getElementById('all_motif_consultation').style.display = 'block';
		document.getElementById('id_diarrhee').checked = '';
		document.getElementById('id_malnutrition').checked = '';
		document.getElementById('id_paludisme').checked = '';
		document.getElementById('id_pneumonie').checked = '';
		document.getElementById('id_fievre_simple').checked = '';
		document.getElementById('id_toux_ou_rhume').checked = '';
		document.getElementById('id_signe_de_danger').checked = '';
		document.getElementById('id_autre_motif').checked = '';
		document.getElementById('id_motif_nr').checked = '';

		document.getElementById('label_pregnant_or_postpartum').style.display = 'none';
		document.getElementById('pregnant_or_postpartum').value = '';
		document.getElementById('pregnant_or_postpartum').required = '';

		document.getElementById('pf_administree_oui_ou_non').style.display = 'none';
		document.getElementById('id_pf_administered_yes_or_no_0').checked = '';
		document.getElementById('id_pf_administered_yes_or_no_1').checked = '';
		document.getElementById('id_pf_administered_yes_or_no_2').checked = '';
		document.getElementById('id_pf_administered_yes_or_no_0').required = '';
		document.getElementById('id_pf_administered_yes_or_no_1').required = '';
		document.getElementById('id_pf_administered_yes_or_no_2').required = '';

		document.getElementById('label_pf_administered').style.display = 'none';
		document.getElementById('pf_administered').value = '';
		document.getElementById('pf_administered').required = '';		
		document.getElementById('label_pregnancy_test').style.display = 'none';
		document.getElementById('pregnancy_test').checked = '';
		document.getElementById('pregnancy_test').required = '';

		document.getElementById('label_ptme').style.display = 'none';
		document.getElementById('ptme').checked = '';
		document.getElementById('ptme').required = '';

		document.getElementById('les_autres_motifs').style.display = 'none';
		document.getElementById('les_autres_motifs_2').style.display = 'none';

		document.getElementById('label_counciling').style.display = 'none';
		document.getElementById('id_counciling_0').checked = '';
		document.getElementById('id_counciling_1').checked = '';
		document.getElementById('id_counciling_2').checked = '';
		document.getElementById('id_counciling_0').required = '';
		document.getElementById('id_counciling_1').required = '';
		document.getElementById('id_counciling_2').required = '';

		document.getElementById('label_reference').style.display = 'block';
		document.getElementById('id_reference_0').checked = '';
		document.getElementById('id_reference_1').checked = '';
		document.getElementById('id_reference_2').checked = '';
		document.getElementById('id_reference_0').required = 'required';
		document.getElementById('id_reference_1').required = 'required';
		document.getElementById('id_reference_2').required = 'required';

		document.getElementById('label_care_or_follow_up').style.display = 'block';
		document.getElementById('id_care_or_follow_up_0').checked = '';
		document.getElementById('id_care_or_follow_up_1').checked = '';
		document.getElementById('id_care_or_follow_up_2').checked = '';
		document.getElementById('id_care_or_follow_up_0').required = 'required';
		document.getElementById('id_care_or_follow_up_1').required = 'required';
		document.getElementById('id_care_or_follow_up_2').required = 'required';

		document.getElementById('label_promptness').style.display = 'block';
		document.getElementById('id_promptness_0').checked = '';
		document.getElementById('id_promptness_1').checked = '';
		document.getElementById('id_promptness_2').checked = '';
		document.getElementById('id_promptness_3').checked = '';
		document.getElementById('id_promptness_4').checked = '';
		document.getElementById('id_promptness_5').checked = '';
		document.getElementById('id_promptness_0').required = 'required';
		document.getElementById('id_promptness_1').required = 'required';
		document.getElementById('id_promptness_2').required = 'required';
		document.getElementById('id_promptness_3').required = 'required';
		document.getElementById('id_promptness_4').required = 'required';
		document.getElementById('id_promptness_5').required = 'required';

	} else if (document.getElementById('visit_type').options[document.getElementById('visit_type').selectedIndex].value == '2') {

		document.getElementById('label_sex').style.display = 'none';
		document.getElementById('id_sex_0').checked = '';
		document.getElementById('id_sex_1').checked = 'checked';
		document.getElementById('id_sex_2').checked = '';
		document.getElementById('id_sex_0').required = '';
		document.getElementById('id_sex_1').required = 'required';
		document.getElementById('id_sex_2').required = '';

		document.getElementById('label_ac_nc').style.display = 'block';
		document.getElementById('id_ac_nc_1').checked = '';
		document.getElementById('id_ac_nc_0').checked = '';
		document.getElementById('id_ac_nc_2').checked = '';
		document.getElementById('id_ac_nc_1').required = 'required';
		document.getElementById('id_ac_nc_0').required = 'required';
		document.getElementById('id_ac_nc_2').required = 'required';

		document.getElementById('age').style.display = 'block';
		document.getElementById('age_year').value = '';
		document.getElementById('age_month').value = '';
		document.getElementById('age_semaine').value = '';
		document.getElementById('age_jour').value = '';

		document.getElementById('label_save_while_value').style.display = 'none';
		document.getElementById('save_while_value').style.display = 'none';
		document.getElementById('save_while_value').value = '';

		document.getElementById('all_motif_consultation').style.display = 'block';
		document.getElementById('id_diarrhee').checked = '';
		document.getElementById('id_malnutrition').checked = '';
		document.getElementById('id_paludisme').checked = '';
		document.getElementById('id_pneumonie').checked = '';
		document.getElementById('id_fievre_simple').checked = '';
		document.getElementById('id_toux_ou_rhume').checked = '';
		document.getElementById('id_signe_de_danger').checked = '';
		document.getElementById('id_autre_motif').checked = '';
		document.getElementById('id_motif_nr').checked = '';

		document.getElementById('les_autres_motifs').style.display = 'block';
		document.getElementById('les_autres_motifs_2').style.display = 'block';

		document.getElementById('label_pregnant_or_postpartum').style.display = 'block';
		document.getElementById('pregnant_or_postpartum').value = '';
		document.getElementById('pregnant_or_postpartum').required = '';

		document.getElementById('pf_administree_oui_ou_non').style.display = 'none';
		document.getElementById('id_pf_administered_yes_or_no_0').checked = '';
		document.getElementById('id_pf_administered_yes_or_no_1').checked = '';
		document.getElementById('id_pf_administered_yes_or_no_2').checked = '';
		document.getElementById('id_pf_administered_yes_or_no_0').required = '';
		document.getElementById('id_pf_administered_yes_or_no_1').required = '';
		document.getElementById('id_pf_administered_yes_or_no_2').required = '';

		document.getElementById('label_pf_administered').style.display = 'none';
		document.getElementById('pf_administered').value = '';
		document.getElementById('pf_administered').required = '';		
		document.getElementById('label_pregnancy_test').style.display = 'block';
		document.getElementById('pregnancy_test').checked = '';
		document.getElementById('pregnancy_test').required = '';

		document.getElementById('label_ptme').style.display = 'block';
		document.getElementById('ptme').checked = '';
		document.getElementById('ptme').required = '';

		document.getElementById('label_counciling').style.display = 'none';
		document.getElementById('id_counciling_0').checked = '';
		document.getElementById('id_counciling_1').checked = '';
		document.getElementById('id_counciling_2').checked = '';
		document.getElementById('id_counciling_0').required = '';
		document.getElementById('id_counciling_1').required = '';
		document.getElementById('id_counciling_2').required = '';

		document.getElementById('label_reference').style.display = 'block';
		document.getElementById('id_reference_0').checked = '';
		document.getElementById('id_reference_1').checked = '';
		document.getElementById('id_reference_2').checked = '';
		document.getElementById('id_reference_0').required = 'required';
		document.getElementById('id_reference_1').required = 'required';
		document.getElementById('id_reference_2').required = 'required';

		document.getElementById('label_care_or_follow_up').style.display = 'none';
		document.getElementById('id_care_or_follow_up_0').checked = '';
		document.getElementById('id_care_or_follow_up_1').checked = 'checked';
		document.getElementById('id_care_or_follow_up_2').checked = '';
		document.getElementById('id_care_or_follow_up_0').required = 'required';
		document.getElementById('id_care_or_follow_up_1').required = 'required';
		document.getElementById('id_care_or_follow_up_2').required = 'required';		
		document.getElementById('label_promptness').style.display = 'none';
		document.getElementById('id_promptness_0').checked = '';
		document.getElementById('id_promptness_1').checked = '';
		document.getElementById('id_promptness_2').checked = '';

		document.getElementById('id_promptness_3').checked = '';
		document.getElementById('id_promptness_4').checked = 'checked';
		document.getElementById('id_promptness_5').checked = '';
		document.getElementById('id_promptness_0').required = 'required';
		document.getElementById('id_promptness_1').required = 'required';
		document.getElementById('id_promptness_2').required = 'required';
		document.getElementById('id_promptness_3').required = 'required';
		document.getElementById('id_promptness_4').required = 'required';
		document.getElementById('id_promptness_5').required = 'required';

	} else if (document.getElementById('visit_type').options[document.getElementById('visit_type').selectedIndex].value == '3') {

		document.getElementById('label_sex').style.display = 'none';
		document.getElementById('id_sex_0').checked = '';
		document.getElementById('id_sex_1').checked = 'checked';
		document.getElementById('id_sex_2').checked = '';
		document.getElementById('id_sex_0').required = '';
		document.getElementById('id_sex_1').required = 'required';
		document.getElementById('id_sex_2').required = '';

		document.getElementById('label_ac_nc').style.display = 'block';
		document.getElementById('id_ac_nc_1').checked = '';
		document.getElementById('id_ac_nc_0').checked = '';
		document.getElementById('id_ac_nc_2').checked = '';
		document.getElementById('id_ac_nc_1').required = 'required';
		document.getElementById('id_ac_nc_0').required = 'required';
		document.getElementById('id_ac_nc_2').required = 'required';

		document.getElementById('age').style.display = 'block';
		document.getElementById('age_year').value = '';
		document.getElementById('age_month').value = '';
		document.getElementById('age_semaine').value = '';
		document.getElementById('age_jour').value = '';

		document.getElementById('label_save_while_value').style.display = 'none';
		document.getElementById('save_while_value').style.display = 'none';
		document.getElementById('save_while_value').value = '';

		document.getElementById('all_motif_consultation').style.display = 'block';
		document.getElementById('id_diarrhee').checked = '';
		document.getElementById('id_malnutrition').checked = '';
		document.getElementById('id_paludisme').checked = '';
		document.getElementById('id_pneumonie').checked = '';
		document.getElementById('id_fievre_simple').checked = '';
		document.getElementById('id_toux_ou_rhume').checked = '';
		document.getElementById('id_signe_de_danger').checked = '';
		document.getElementById('id_autre_motif').checked = '';
		document.getElementById('id_motif_nr').checked = '';

		document.getElementById('les_autres_motifs').style.display = 'block';
		document.getElementById('les_autres_motifs_2').style.display = 'none';

		document.getElementById('label_pregnant_or_postpartum').style.display = 'none';
		document.getElementById('pregnant_or_postpartum').value = '';
		document.getElementById('pregnant_or_postpartum').required = '';

		document.getElementById('pf_administree_oui_ou_non').style.display = 'block';
		document.getElementById('id_pf_administered_yes_or_no_0').checked = '';
		document.getElementById('id_pf_administered_yes_or_no_1').checked = '';
		document.getElementById('id_pf_administered_yes_or_no_2').checked = '';
		document.getElementById('id_pf_administered_yes_or_no_0').required = 'required';
		document.getElementById('id_pf_administered_yes_or_no_1').required = 'required';
		document.getElementById('id_pf_administered_yes_or_no_2').required = 'required';

		document.getElementById('label_pf_administered').style.display = 'none';
		document.getElementById('pf_administered').value = '';
		document.getElementById('pf_administered').required = '';		
		document.getElementById('label_pregnancy_test').style.display = 'none';
		document.getElementById('pregnancy_test').checked = '';
		document.getElementById('pregnancy_test').required = '';

		document.getElementById('label_ptme').style.display = 'none';
		document.getElementById('ptme').checked = '';
		document.getElementById('ptme').required = '';

		document.getElementById('label_counciling').style.display = 'block';
		document.getElementById('id_counciling_0').checked = '';
		document.getElementById('id_counciling_1').checked = '';
		document.getElementById('id_counciling_2').checked = '';
		document.getElementById('id_counciling_0').required = 'required';
		document.getElementById('id_counciling_1').required = 'required';
		document.getElementById('id_counciling_2').required = 'required';

		document.getElementById('label_reference').style.display = 'block';
		document.getElementById('id_reference_0').checked = '';
		document.getElementById('id_reference_1').checked = '';
		document.getElementById('id_reference_2').checked = '';
		document.getElementById('id_reference_0').required = 'required';
		document.getElementById('id_reference_1').required = 'required';
		document.getElementById('id_reference_2').required = 'required';

		document.getElementById('label_care_or_follow_up').style.display = 'none';
		document.getElementById('id_care_or_follow_up_0').checked = '';
		document.getElementById('id_care_or_follow_up_1').checked = 'checked';
		document.getElementById('id_care_or_follow_up_2').checked = '';
		document.getElementById('id_care_or_follow_up_0').required = 'required';
		document.getElementById('id_care_or_follow_up_1').required = 'required';
		document.getElementById('id_care_or_follow_up_2').required = 'required';

		document.getElementById('label_promptness').style.display = 'none';
		document.getElementById('id_promptness_0').checked = '';
		document.getElementById('id_promptness_1').checked = '';
		document.getElementById('id_promptness_2').checked = '';

		document.getElementById('id_promptness_3').checked = '';
		document.getElementById('id_promptness_4').checked = 'checked';
		document.getElementById('id_promptness_5').checked = '';
		document.getElementById('id_promptness_0').required = 'required';
		document.getElementById('id_promptness_1').required = 'required';
		document.getElementById('id_promptness_2').required = 'required';
		document.getElementById('id_promptness_3').required = 'required';
		document.getElementById('id_promptness_4').required = 'required';
		document.getElementById('id_promptness_5').required = 'required';

	} else if (document.getElementById('visit_type').options[document.getElementById('visit_type').selectedIndex].value == '4') {

		document.getElementById('label_sex').style.display = 'none';
		document.getElementById('id_sex_0').checked = '';
		document.getElementById('id_sex_1').checked = '';
		document.getElementById('id_sex_2').checked = '';
		document.getElementById('id_sex_0').required = '';
		document.getElementById('id_sex_1').required = '';
		document.getElementById('id_sex_2').required = '';

		document.getElementById('label_ac_nc').style.display = 'none';
		document.getElementById('id_ac_nc_1').checked = '';
		document.getElementById('id_ac_nc_0').checked = '';
		document.getElementById('id_ac_nc_2').checked = '';
		document.getElementById('id_ac_nc_1').required = '';
		document.getElementById('id_ac_nc_0').required = '';
		document.getElementById('id_ac_nc_2').required = '';

		document.getElementById('age').style.display = 'none';
		document.getElementById('age_year').value = '';
		document.getElementById('age_month').value = '';
		document.getElementById('age_semaine').value = '';
		document.getElementById('age_jour').value = '';

		document.getElementById('label_save_while_value').style.display = 'block';
		document.getElementById('save_while_value').style.display = 'block';
		document.getElementById('save_while_value').value = '';

		document.getElementById('all_motif_consultation').style.display = 'none';
		document.getElementById('id_diarrhee').checked = '';
		document.getElementById('id_malnutrition').checked = '';
		document.getElementById('id_paludisme').checked = '';
		document.getElementById('id_pneumonie').checked = '';
		document.getElementById('id_fievre_simple').checked = '';
		document.getElementById('id_toux_ou_rhume').checked = '';
		document.getElementById('id_signe_de_danger').checked = '';
		document.getElementById('id_autre_motif').checked = '';
		document.getElementById('id_motif_nr').checked = '';

		document.getElementById('les_autres_motifs').style.display = 'none';
		document.getElementById('les_autres_motifs_2').style.display = 'none';

		document.getElementById('label_pregnant_or_postpartum').style.display = 'none';
		document.getElementById('pregnant_or_postpartum').value = '';
		document.getElementById('pregnant_or_postpartum').required = '';

		document.getElementById('pf_administree_oui_ou_non').style.display = 'none';
		document.getElementById('id_pf_administered_yes_or_no_0').checked = '';
		document.getElementById('id_pf_administered_yes_or_no_1').checked = '';
		document.getElementById('id_pf_administered_yes_or_no_2').checked = '';
		document.getElementById('id_pf_administered_yes_or_no_0').required = '';
		document.getElementById('id_pf_administered_yes_or_no_1').required = '';
		document.getElementById('id_pf_administered_yes_or_no_2').required = '';

		document.getElementById('label_pf_administered').style.display = 'none';
		document.getElementById('pf_administered').value = '';
		document.getElementById('pf_administered').required = '';		
		document.getElementById('label_pregnancy_test').style.display = 'none';
		document.getElementById('pregnancy_test').checked = '';
		document.getElementById('pregnancy_test').required = '';

		document.getElementById('label_ptme').style.display = 'none';
		document.getElementById('ptme').checked = '';
		document.getElementById('ptme').required = '';

		document.getElementById('label_counciling').style.display = 'none';
		document.getElementById('id_counciling_0').checked = '';
		document.getElementById('id_counciling_1').checked = '';
		document.getElementById('id_counciling_2').checked = '';
		document.getElementById('id_counciling_0').required = '';
		document.getElementById('id_counciling_1').required = '';
		document.getElementById('id_counciling_2').required = '';

		document.getElementById('label_reference').style.display = 'none';
		document.getElementById('id_reference_0').checked = '';
		document.getElementById('id_reference_1').checked = '';
		document.getElementById('id_reference_2').checked = '';
		document.getElementById('id_reference_0').required = '';
		document.getElementById('id_reference_1').required = '';
		document.getElementById('id_reference_2').required = '';

		document.getElementById('label_care_or_follow_up').style.display = 'none';
		document.getElementById('id_care_or_follow_up_0').checked = '';
		document.getElementById('id_care_or_follow_up_1').checked = '';
		document.getElementById('id_care_or_follow_up_2').checked = '';
		document.getElementById('id_care_or_follow_up_0').required = '';
		document.getElementById('id_care_or_follow_up_1').required = '';
		document.getElementById('id_care_or_follow_up_2').required = '';

		document.getElementById('label_promptness').style.display = 'none';
		document.getElementById('id_promptness_0').checked = '';
		document.getElementById('id_promptness_1').checked = '';
		document.getElementById('id_promptness_2').checked = '';

		document.getElementById('id_promptness_3').checked = '';
		document.getElementById('id_promptness_4').checked = '';
		document.getElementById('id_promptness_5').checked = '';
		document.getElementById('id_promptness_0').required = '';
		document.getElementById('id_promptness_1').required = '';
		document.getElementById('id_promptness_2').required = '';
		document.getElementById('id_promptness_3').required = '';
		document.getElementById('id_promptness_4').required = '';
		document.getElementById('id_promptness_5').required = '';

	} else {
		document.getElementById('label_sex').style.display = 'none';
		document.getElementById('id_sex_0').checked = '';
		document.getElementById('id_sex_1').checked = '';
		document.getElementById('id_sex_2').checked = '';
		document.getElementById('id_sex_0').required = '';
		document.getElementById('id_sex_1').required = '';
		document.getElementById('id_sex_2').required = '';

		document.getElementById('label_ac_nc').style.display = 'none';
		document.getElementById('id_ac_nc_1').checked = '';
		document.getElementById('id_ac_nc_0').checked = '';
		document.getElementById('id_ac_nc_2').checked = '';
		document.getElementById('id_ac_nc_1').required = '';
		document.getElementById('id_ac_nc_0').required = '';
		document.getElementById('id_ac_nc_2').required = '';

		document.getElementById('age').style.display = 'none';
		document.getElementById('age_year').value = '';
		document.getElementById('age_month').value = '';
		document.getElementById('age_semaine').value = '';
		document.getElementById('age_jour').value = '';

		document.getElementById('label_save_while_value').style.display = 'none';
		document.getElementById('save_while_value').style.display = 'none';
		document.getElementById('save_while_value').value = '';

		document.getElementById('all_motif_consultation').style.display = 'none';
		document.getElementById('id_diarrhee').checked = '';
		document.getElementById('id_malnutrition').checked = '';
		document.getElementById('id_paludisme').checked = '';
		document.getElementById('id_pneumonie').checked = '';
		document.getElementById('id_fievre_simple').checked = '';
		document.getElementById('id_toux_ou_rhume').checked = '';
		document.getElementById('id_signe_de_danger').checked = '';
		document.getElementById('id_autre_motif').checked = '';
		document.getElementById('id_motif_nr').checked = '';

		document.getElementById('les_autres_motifs').style.display = 'none';
		document.getElementById('les_autres_motifs_2').style.display = 'none';

		document.getElementById('label_pregnant_or_postpartum').style.display = 'none';
		document.getElementById('pregnant_or_postpartum').value = '';
		document.getElementById('pregnant_or_postpartum').required = '';

		document.getElementById('label_pf_administered').style.display = 'none';
		document.getElementById('pf_administered').value = '';
		document.getElementById('pf_administered').required = '';		
		document.getElementById('label_pregnancy_test').style.display = 'none';
		document.getElementById('pregnancy_test').checked = '';
		document.getElementById('pregnancy_test').required = '';

		document.getElementById('label_ptme').style.display = 'none';
		document.getElementById('ptme').checked = '';
		document.getElementById('ptme').required = '';

		document.getElementById('label_counciling').style.display = 'none';
		document.getElementById('id_counciling_0').checked = '';
		document.getElementById('id_counciling_1').checked = '';
		document.getElementById('id_counciling_2').checked = '';
		document.getElementById('id_counciling_0').required = '';
		document.getElementById('id_counciling_1').required = '';
		document.getElementById('id_counciling_2').required = '';

		document.getElementById('label_reference').style.display = 'none';
		document.getElementById('id_reference_0').checked = '';
		document.getElementById('id_reference_1').checked = '';
		document.getElementById('id_reference_2').checked = '';
		document.getElementById('id_reference_0').required = '';
		document.getElementById('id_reference_1').required = '';
		document.getElementById('id_reference_2').required = '';

		document.getElementById('label_care_or_follow_up').style.display = 'none';
		document.getElementById('id_care_or_follow_up_0').checked = '';
		document.getElementById('id_care_or_follow_up_1').checked = '';
		document.getElementById('id_care_or_follow_up_2').checked = '';
		document.getElementById('id_care_or_follow_up_0').required = '';
		document.getElementById('id_care_or_follow_up_1').required = '';
		document.getElementById('id_care_or_follow_up_2').required = '';

		document.getElementById('label_promptness').style.display = 'none';
		document.getElementById('id_promptness_0').checked = '';
		document.getElementById('id_promptness_1').checked = '';
		document.getElementById('id_promptness_2').checked = '';

		document.getElementById('id_promptness_3').checked = '';
		document.getElementById('id_promptness_4').checked = '';
		document.getElementById('id_promptness_5').checked = '';
		document.getElementById('id_promptness_0').required = '';
		document.getElementById('id_promptness_1').required = '';
		document.getElementById('id_promptness_2').required = '';
		document.getElementById('id_promptness_3').required = '';
		document.getElementById('id_promptness_4').required = '';
		document.getElementById('id_promptness_5').required = '';

	}
};

$('#id_autre_motif').on('change', function () {
	document.getElementById('id_comment').required = '';

	if (document.getElementById('id_autre_motif').checked) {
		document.getElementById('comment_autres_motifs').style.display = 'block';
	} else {
		document.getElementById('comment_autres_motifs').style.display = 'none';
	}

});

function getNewEnceinteOuPostpartum() {
	document.getElementById('id_comment').required = '';
	if (document.getElementById('pregnant_or_postpartum').options[document.getElementById('pregnant_or_postpartum').selectedIndex].value == '1') {

		document.getElementById('pf_administree_oui_ou_non').style.display = 'none';
		document.getElementById('id_pf_administered_yes_or_no_0').checked = '';
		document.getElementById('id_pf_administered_yes_or_no_1').checked = '';
		document.getElementById('id_pf_administered_yes_or_no_2').checked = '';
		document.getElementById('id_pf_administered_yes_or_no_0').required = '';
		document.getElementById('id_pf_administered_yes_or_no_1').required = '';
		document.getElementById('id_pf_administered_yes_or_no_2').required = '';

		document.getElementById('label_pf_administered').style.display = 'none';
		document.getElementById('pf_administered').value = '';
		document.getElementById('pf_administered').required = '';		
		document.getElementById('label_pregnancy_test').style.display = 'block';
		document.getElementById('pregnancy_test').checked = '';
		document.getElementById('pregnancy_test').required = '';

		document.getElementById('label_ptme').style.display = 'block';
		document.getElementById('ptme').checked = '';
		document.getElementById('ptme').required = '';

		document.getElementById('label_counciling').style.display = 'none';
		document.getElementById('id_counciling_0').checked = '';
		document.getElementById('id_counciling_1').checked = '';
		document.getElementById('id_counciling_2').checked = '';
		document.getElementById('id_counciling_0').required = '';
		document.getElementById('id_counciling_1').required = '';
		document.getElementById('id_counciling_2').required = '';

		document.getElementById('label_reference').style.display = 'block';
		document.getElementById('id_reference_0').checked = '';
		document.getElementById('id_reference_1').checked = '';
		document.getElementById('id_reference_2').checked = '';
		document.getElementById('id_reference_0').required = 'required';
		document.getElementById('id_reference_1').required = 'required';
		document.getElementById('id_reference_2').required = 'required';

		document.getElementById('label_care_or_follow_up').style.display = 'none';
		document.getElementById('id_care_or_follow_up_0').checked = '';
		document.getElementById('id_care_or_follow_up_1').checked = 'checked';
		document.getElementById('id_care_or_follow_up_2').checked = '';
		document.getElementById('id_care_or_follow_up_0').required = 'required';
		document.getElementById('id_care_or_follow_up_1').required = 'required';
		document.getElementById('id_care_or_follow_up_2').required = 'required';

		document.getElementById('label_promptness').style.display = 'none';
		document.getElementById('id_promptness_0').checked = '';
		document.getElementById('id_promptness_1').checked = '';
		document.getElementById('id_promptness_2').checked = '';
		document.getElementById('id_promptness_3').checked = '';
		document.getElementById('id_promptness_4').checked = 'checked';
		document.getElementById('id_promptness_5').checked = '';

		document.getElementById('id_promptness_0').required = 'required';
		document.getElementById('id_promptness_1').required = 'required';
		document.getElementById('id_promptness_2').required = 'required';

		document.getElementById('id_promptness_3').required = 'required';
		document.getElementById('id_promptness_4').required = 'required';
		document.getElementById('id_promptness_5').required = 'required';

	} else if (document.getElementById('pregnant_or_postpartum').options[document.getElementById('pregnant_or_postpartum').selectedIndex].value == 'post_partum') {

		document.getElementById('pf_administree_oui_ou_non').style.display = 'none';
		document.getElementById('id_pf_administered_yes_or_no_0').checked = '';
		document.getElementById('id_pf_administered_yes_or_no_1').checked = '';
		document.getElementById('id_pf_administered_yes_or_no_2').checked = '';
		document.getElementById('id_pf_administered_yes_or_no_0').required = '';
		document.getElementById('id_pf_administered_yes_or_no_1').required = '';
		document.getElementById('id_pf_administered_yes_or_no_2').required = '';

		document.getElementById('label_pf_administered').style.display = 'none';
		document.getElementById('pf_administered').value = '';
		document.getElementById('pf_administered').required = '';		
		document.getElementById('label_pregnancy_test').style.display = 'none';
		document.getElementById('pregnancy_test').checked = '';
		document.getElementById('pregnancy_test').required = '';

		document.getElementById('label_ptme').style.display = 'block';
		document.getElementById('ptme').checked = '';
		document.getElementById('ptme').required = '';

		document.getElementById('label_counciling').style.display = 'none';
		document.getElementById('id_counciling_0').checked = '';
		document.getElementById('id_counciling_1').checked = '';
		document.getElementById('id_counciling_2').checked = '';
		document.getElementById('id_counciling_0').required = '';
		document.getElementById('id_counciling_1').required = '';
		document.getElementById('id_counciling_2').required = '';

		document.getElementById('label_reference').style.display = 'block';
		document.getElementById('id_reference_0').checked = '';
		document.getElementById('id_reference_1').checked = '';
		document.getElementById('id_reference_2').checked = '';
		document.getElementById('id_reference_0').required = 'required';
		document.getElementById('id_reference_1').required = 'required';
		document.getElementById('id_reference_2').required = 'required';

		document.getElementById('label_care_or_follow_up').style.display = 'none';
		document.getElementById('id_care_or_follow_up_0').checked = '';
		document.getElementById('id_care_or_follow_up_1').checked = 'checked';
		document.getElementById('id_care_or_follow_up_2').checked = '';
		document.getElementById('id_care_or_follow_up_0').required = 'required';
		document.getElementById('id_care_or_follow_up_1').required = 'required';
		document.getElementById('id_care_or_follow_up_2').required = 'required';

		document.getElementById('label_promptness').style.display = 'none';
		document.getElementById('id_promptness_0').checked = '';
		document.getElementById('id_promptness_1').checked = '';
		document.getElementById('id_promptness_2').checked = '';
		document.getElementById('id_promptness_3').checked = '';
		document.getElementById('id_promptness_4').checked = 'checked';
		document.getElementById('id_promptness_5').checked = '';

		document.getElementById('id_promptness_0').required = 'required';
		document.getElementById('id_promptness_1').required = 'required';
		document.getElementById('id_promptness_2').required = 'required';

		document.getElementById('id_promptness_3').required = 'required';
		document.getElementById('id_promptness_4').required = 'required';
		document.getElementById('id_promptness_5').required = 'required';

	} else {

		document.getElementById('pf_administree_oui_ou_non').style.display = 'none';
		document.getElementById('id_pf_administered_yes_or_no_0').checked = '';
		document.getElementById('id_pf_administered_yes_or_no_1').checked = '';
		document.getElementById('id_pf_administered_yes_or_no_2').checked = '';
		document.getElementById('id_pf_administered_yes_or_no_0').required = '';
		document.getElementById('id_pf_administered_yes_or_no_1').required = '';
		document.getElementById('id_pf_administered_yes_or_no_2').required = '';

		document.getElementById('label_pf_administered').style.display = 'none';
		document.getElementById('pf_administered').value = '';
		document.getElementById('pf_administered').required = '';		
		document.getElementById('label_pregnancy_test').style.display = 'block';
		document.getElementById('pregnancy_test').checked = '';
		document.getElementById('pregnancy_test').required = '';

		document.getElementById('label_ptme').style.display = 'none';
		document.getElementById('ptme').checked = '';
		document.getElementById('ptme').required = '';

		document.getElementById('label_counciling').style.display = 'none';
		document.getElementById('id_counciling_0').checked = '';
		document.getElementById('id_counciling_1').checked = '';
		document.getElementById('id_counciling_2').checked = '';
		document.getElementById('id_counciling_0').required = '';
		document.getElementById('id_counciling_1').required = '';
		document.getElementById('id_counciling_2').required = '';

		document.getElementById('label_reference').style.display = 'block';
		document.getElementById('id_reference_0').checked = '';
		document.getElementById('id_reference_1').checked = '';
		document.getElementById('id_reference_2').checked = '';
		document.getElementById('id_reference_0').required = 'required';
		document.getElementById('id_reference_1').required = 'required';
		document.getElementById('id_reference_2').required = 'required';

		document.getElementById('label_care_or_follow_up').style.display = 'none';
		document.getElementById('id_care_or_follow_up_0').checked = '';
		document.getElementById('id_care_or_follow_up_1').checked = 'checked';
		document.getElementById('id_care_or_follow_up_2').checked = '';
		document.getElementById('id_care_or_follow_up_0').required = 'required';
		document.getElementById('id_care_or_follow_up_1').required = 'required';
		document.getElementById('id_care_or_follow_up_2').required = 'required';

		document.getElementById('label_promptness').style.display = 'none';
		document.getElementById('id_promptness_0').checked = '';
		document.getElementById('id_promptness_1').checked = '';
		document.getElementById('id_promptness_2').checked = '';		
		document.getElementById('id_promptness_3').checked = '';
		document.getElementById('id_promptness_4').checked = 'checked';
		document.getElementById('id_promptness_5').checked = '';

		document.getElementById('id_promptness_0').required = 'required';
		document.getElementById('id_promptness_1').required = 'required';
		document.getElementById('id_promptness_2').required = 'required';
		document.getElementById('id_promptness_3').required = 'required';
		document.getElementById('id_promptness_4').required = 'required';
		document.getElementById('id_promptness_5').required = 'required';	}
}

function getNewPfAdministreeOrNot() {
	document.getElementById('id_comment').required = '';

	if (document.getElementById('id_pf_administered_yes_or_no_0').checked || document.getElementById('id_pf_administered_yes_or_no_1').checked) {
		document.getElementById('label_pf_administered').style.display = 'block';
		document.getElementById('pf_administered').value = '';
		document.getElementById('pf_administered').required = 'required';
	}
	else if (document.getElementById('id_pf_administered_yes_or_no_2').checked) {
		document.getElementById('label_pf_administered').style.display = 'none';
		document.getElementById('pf_administered').value = '';
		document.getElementById('pf_administered').required = '';
	}
}

function getNewPfNonAdministree() {
	document.getElementById('id_comment').required = '';

	if (document.getElementById('pf_non_administree').options[document.getElementById('pf_non_administree').selectedIndex].value == '13') {
		document.getElementById('label_counciling').style.display = 'none';
		document.getElementById('id_counciling_0').checked = '';
		document.getElementById('id_counciling_1').checked = '';
		document.getElementById('id_counciling_2').checked = '';

		document.getElementById('label_reference').style.display = 'none';
		document.getElementById('id_reference_0').checked = '';
		document.getElementById('id_reference_1').checked = '';
		document.getElementById('id_reference_2').checked = '';
	}
}

function getNewSoinsOuSuivi() {
	document.getElementById('id_comment').required = '';

	if (document.getElementById('id_care_or_follow_up_0').checked) {
		document.getElementById('label_promptness').style.display = 'block';
		document.getElementById('id_promptness_0').checked = '';
		document.getElementById('id_promptness_1').checked = '';
		document.getElementById('id_promptness_2').checked = '';
		document.getElementById('id_promptness_3').checked = '';
		document.getElementById('id_promptness_4').checked = '';
		document.getElementById('id_promptness_5').checked = '';
		document.getElementById('id_promptness_0').required = 'required';
		document.getElementById('id_promptness_1').required = 'required';
		document.getElementById('id_promptness_2').required = 'required';
		document.getElementById('id_promptness_3').required = 'required';
		document.getElementById('id_promptness_4').required = 'required';
		document.getElementById('id_promptness_5').required = 'required';

		//document.getElementById('id_promptness_3').style.borderRadius = '20%';
		//document.getElementById('id_promptness_3').style.backgroundColor = 'black';
	}
	else if (document.getElementById('id_care_or_follow_up_1').checked) {
		document.getElementById('label_promptness').style.display = 'none';
		document.getElementById('id_promptness_0').checked = '';
		document.getElementById('id_promptness_1').checked = '';
		document.getElementById('id_promptness_2').checked = '';
		document.getElementById('id_promptness_3').checked = '';
		document.getElementById('id_promptness_4').checked = 'checked';
		document.getElementById('id_promptness_5').checked = '';
		document.getElementById('id_promptness_0').required = 'required';
		document.getElementById('id_promptness_1').required = 'required';
		document.getElementById('id_promptness_2').required = 'required';
		document.getElementById('id_promptness_3').required = 'required';
		document.getElementById('id_promptness_4').required = 'required';
		document.getElementById('id_promptness_5').required = 'required';
	}
	else if (document.getElementById('id_care_or_follow_up_2').checked) {
		document.getElementById('label_promptness').style.display = 'block';
		document.getElementById('id_promptness_0').checked = '';
		document.getElementById('id_promptness_1').checked = '';
		document.getElementById('id_promptness_2').checked = '';
		document.getElementById('id_promptness_3').checked = '';
		document.getElementById('id_promptness_4').checked = '';
		document.getElementById('id_promptness_5').checked = '';
		document.getElementById('id_promptness_0').required = 'required';
		document.getElementById('id_promptness_1').required = 'required';
		document.getElementById('id_promptness_2').required = 'required';
		document.getElementById('id_promptness_3').required = 'required';
		document.getElementById('id_promptness_4').required = 'required';
		document.getElementById('id_promptness_5').required = 'required';
	}
	else {
		document.getElementById('label_promptness').style.display = 'block';
		document.getElementById('id_promptness_0').checked = '';
		document.getElementById('id_promptness_1').checked = '';
		document.getElementById('id_promptness_2').checked = '';
		document.getElementById('id_promptness_3').checked = '';
		document.getElementById('id_promptness_4').checked = '';
		document.getElementById('id_promptness_5').checked = '';
		document.getElementById('id_promptness_0').required = 'required';
		document.getElementById('id_promptness_1').required = 'required';
		document.getElementById('id_promptness_2').required = 'required';
		document.getElementById('id_promptness_3').required = 'required';
		document.getElementById('id_promptness_4').required = 'required';
		document.getElementById('id_promptness_5').required = 'required';
	}

}

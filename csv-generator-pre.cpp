#include <iostream>
#include <fstream>
#include <stdio.h>
#include <time.h>

using namespace std;

#define APPLICANTS 250

int main(void) {

	//post interview
	fstream outfile;

	srand(time(NULL));

	outfile.open( "pre-interview-large.csv", fstream::out);

	outfile << "userID,success,years_exp_total,number_of_employers,years_exp_relevant,degree_ba,degree_ms,degree_phd,internal_reference,external_web_indeed,external_web_glassdoor\n";


	int userID,
		success,
		years_exp_total,
		number_of_employers,
		years_exp_relevant,
		degree_ba,
		degree_ms,
		degree_phd,
		internal_reference,
		external_web_indeed,
		external_web_glassdoor;

	int avgyears;

	for( int i=0; i<APPLICANTS; i++ ) {
		//userID
		userID = i;
		//success
		success = rand() % 2;

	//	years_exp_total,
		years_exp_total = rand() % 15;

	//	number_of_employers,
		number_of_employers = 1 + years_exp_total % ( success ? 2 : 4 );
	
	//	years_exp_relevant,
		years_exp_relevant = rand() % ( 1 + ( success ? years_exp_total : years_exp_total/2 ));
	
	//	degree_ba,
		degree_ba = 0 != ( success ?  rand() % 30  :  rand() % 20 );

	//	degree_ms,
		degree_ms = degree_ba &&  0 == ( success ?  rand() % 5  :  rand() % 10 );

	//	degree_phd,
		degree_phd = degree_ms &&  0 == ( success ?  rand() % 20  :  rand() % 40 );
	
	//	internal_reference,
		internal_reference = success ? ( rand() % 4 != 0 ): ( rand() % 2 != 0 );

	//	external_web_indeed,
		external_web_indeed = !internal_reference && rand() % 2;
	
	//	external_web_glassdoor;
		external_web_glassdoor = !internal_reference && !external_web_indeed;	

	outfile << userID << ", "<< success <<", "<< years_exp_total <<", "<< number_of_employers <<", "<< years_exp_relevant <<", "<< degree_ba <<", "<< degree_ms  <<", "<< degree_phd  <<", "<< internal_reference  <<", "<< external_web_indeed  <<", "<< external_web_glassdoor << "\n";

	}

	outfile.close();

	return 0;
}

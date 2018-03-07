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

	outfile.open( "post-interview-large.csv", fstream::out);

	outfile << "userID,success,did_research,interview_time,num_questions_asked,tech_Q_1,tech_Q_2,personality,salary_prev,salary_expect\n";

	int userID,
		success,
		did_research,
		interview_time,
		Qs_asked,
		techQ_1,
		techQ_2,
		personality,
		salary_prev,
		salary_exp;

	for( int i=0; i<APPLICANTS; i++ ) {
		//userID
		userID = i;
		//success
		success = rand() % 2;

		//did_research  
		did_research = success ? (rand() % 20 != 0) : (rand() % 10 != 0); 
	
		//interview_time
		interview_time = 80 - ( success ? rand() % 40 : rand() % 65 );

		//num_questions_asked
		Qs_asked = success ? rand() % 4 + 1 : rand() % 3;

		//tech_Q_1
		techQ_1 = success ? (rand() % 25 != 0) : (rand() % 15 != 0);

		//tech_Q_2
		techQ_2 = success ? (rand() % 3 != 0) : (rand() % 2 != 0);

		//personality,
		personality = rand() % 3 + 1;

		//salary_prev,
		salary_prev = 80000 + (success ? rand() % 50 : rand() % 20) * 1000;
		
		//salary_expect
		salary_exp = salary_prev + ( success ? (rand() % 10 + 1) : (rand() % 400 + 1) ) * 1000;

		//write to file
		outfile << userID << ", " << success << ", " << did_research << ", " << interview_time << ", " << Qs_asked << ", " << techQ_1  << ", " << techQ_2 << ", " <<  personality << ", " << salary_prev << ", " << salary_exp  << "\n" ; 
	}

	outfile.close();

	return 0;
}

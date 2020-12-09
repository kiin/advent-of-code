#include <iostream>
#include <fstream>
#include <string>
#include <stdio.h>
#include <vector> 


using namespace std;

int main(void)
{
    int count = 0;
    vector<string> parent;
    string target = "shiny gold";
    fstream newfile;
    newfile.open("day7.txt",ios::in);
    
    if (newfile.is_open()){  
	string tp;
	string rule;
	size_t pos;
	while(getline(newfile, tp)){ 
	    pos = tp.find("bag");
	    rule  = tp.substr(0,pos);
	    if(tp.find(target) != string::npos){
		count++;
		

	    }
	}
	    
	cout << rule << "\n"; 
	newfile.close(); 
    } 
    cout << "------------------------------\n";
    newfile.open("day7.txt",ios::in);
    if(newfile.is_open()){
	cout << "Open";
	string tp2;
	while(getline(newfile, tp2)){
	    int len = parent.size();
	    for(int i = 0; i < len; i++){
		size_t pos = tp2.find("bag");
		string just = tp2.substr(pos);
		cout << just << " - " << parent[i]  << "\n";
		if(just.find(parent[i]) != string::npos){
		    count++;
		}
	    }
	}
	newfile.close();
    }

    cout << count;
    return 0;
}


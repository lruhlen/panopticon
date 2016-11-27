# panopticon
Track legislation, executive orders, and maybe other stuff in a easy-to-understand way.


## Wireframes

+ [Sitemap](https://app.mockflow.com/view/D8ffbe54f276087d9d962c93944719055#/page/755717b281bf47789e29b55e26dbc29f)

+ [Mockups of each of the four main views](https://app.mockflow.com/view/D8ffbe54f276087d9d962c93944719055#/page/755717b281bf47789e29b55e26dbc29f)

## Details on the 4 main views

There are four main views on the website:

1. Overview of all bills from current Congress.
2. List of all bills on the docket, moving into, or heading out of a given Chamber (or the Executive branch).
3. List of all bills in a given Chamber with a specific status (e.g. In Committee, On the Docket, Entering from Other Chamber, Dead, etc)
4. Pages showing detailed info on individual bills, including:
  + Names and contact info of the bill's sponsors
  + Summary of the bill
  + Full text of the bill
  
### Filters
Views 1, 2, and 3 can be filtered on any combination of the following attributes:

+ Party of a bill's sponsors
+ Which committee has "jurisdiction" over a bill
+ Bill topic(s) (E.g. taxes, tariffs, defense, infrastructure, etc.)
+ Bill status
+ Full text (enables search for string matching)

### Data required for each view
#### View 1: Overview of all bills from current Congress
1. Current bill statuses
    + Will likely require additional calculation
2. Bill ID numbers
3. Bill summary
3. Bill's sponsors
4. Party affiliation(s) of bills' sponsors
5. Bill topic(s)
    + May require additional calculations
6. Committee jurisdiction of each bill
1. Full text (enables search for string matching)


#### View 2: List of all bills, of all statuses, in a single Chamber
1. Current bill statuses
    + Will likely require additional calculation
2. Bill ID numbers
3. Bill summary
3. Bill's sponsors
4. Party affiliation(s) of bills' sponsors
5. Bill topic(s)
    + May require additional calculations
6. Committee jurisdiction of each bill
1. Full text (enables search for string matching)



#### View 3: List of all bills with a single status in a single Chamber

1. Current bill statuses
    + Will likely require additional calculation
2. Bill ID numbers
3. Bill summary
3. Bill's sponsors
4. Party affiliation(s) of bills' sponsors
5. Bill topic(s)
    + May require additional calculations
6. Committee jurisdiction of each bill
8. Date that bill was introduced (?)
9. Dates of all changes to bill's status (?)
1. Full text (enables search for string matching)


#### View 4: Detailed info on a single bill

1. Bill ID number
2. Bill title
3. Bill's sponsors
4. Contact info for the bill's sponsors
5. Party affiliation of the bill's sponsors
6. Bill summary
7. Full text of the bill
8. Date that bill was introduced (?)
9. Dates of all changes to bill's status (?)
5. Bill topic(s)
    + May require additional calculations
6. Committee jurisdiction of each bill


-----

## Prepare for front end development
This is for Mac.  If you're not on Mac, you're hosed.

1. Install Postgres (postgresapp.com)
	+ After installation add the following line to your `~/.bash_profile`: `export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/latest/bin`
	+ Then, run `source ~/.bash_profile` in any terminal windows you have open. 
1. Install npm (aka node): `brew install node`
2. Make sure you're using python3
	+ With anaconda: `conda create --name panopticon_app python=3`, then `source activate panopticon_app`
3. Install Django: `pip install Django`
4. Install psycopg2 `pip install psycopg2`
1. Now, `cd` into the `client` dir, and run `npm install`
1. In the top level of the `client` dir, run `mkdir app`, then `npm run build-once`
2. Then, `cd ..; django-admin startproject server`.  This creates Django project.  You only need to do this once per project.


### Some notes on running Django
1. Typically, will enter stuff like this from w/in the project root (in this case, `/panopticon`)
	+ `python manage.py <some command>`
1. To run the development (NOT PRODUCTION) server, enter `python manage.py runserver` 	
1. Anytime you edit/update `client/index.js`, you need to re-run `npm run build-once`
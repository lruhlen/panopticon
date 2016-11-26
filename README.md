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

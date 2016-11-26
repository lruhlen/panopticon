"""
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
"""
import datetime


def get_bill_ids():
    return {
        "bill_ids":[
            {"bill_id":  12334, "bill_display_name": "H.R. 123"},
            {"bill_id":495877, "bill_display_name": "S. 1122"},
            {"bill_id": 94757, "bill_display_name": "S. 9876"},
            {"bill_id":  2295, "bill_display_name": "H.R. 4873"},
        ],
    }


def get_bill_title(bill_id=None):
    return {"bill_title": "Some legislation to Help The People (TM)", }


def get_bill_sponsors(bill_id=None):
    return {
        "Sponsor 1": {
            "name": "John Doe",
            "position": "Senator",
            "state_abbr": "NV",
            "district": "district name or number",
            "party_affiliation": "Democrat",
            "repr_id": 1122,
        },
        "Sponsor 2": {
            "name": "Jane Smith",
            "position": "Senator",
            "state_abbr": "RI",
            "district": "district name or number",
            "party_affiliation": "Republican", "repr_id": 7775,
        },
    }


def get_contact_info(repr_id=None):
    return {
        "repr_id": 7775,
        "phone": "202-224-5653",
        "website": "http://kohl.senate.gov/",
        "address": "330 HART SENATE OFFICE BUILDING WASHINGTON DC 20510",
        "contact_form": "http://www.kohl.senate.gov/contact.cfm",
        "fax": "202-224-9787",
        "office": "330 Hart Senate Office Building",
    }


def get_party_affiliation(repr_id=None):
    return {
        "repr_id": 1122,
        "party": "Republican",
    }


def get_bill_summary(bill_id=None):
    return {
        "bill_id": bill_id,
        "bill_summary": "To amend title 28, United States Code,\
        to clarify the statutory authority for the longstanding practice of the Department\
        of Justice of providing investigatory assistance on request of State and local \
        authorities with respect to certain serious violent crimes, and for other purposes.",
    }


def get_full_bill_text(bill_id=None):
    """Returns a link to the full bill text on GovTrack, for now"""
    return {
        "bill_id": bill_id,
        "bill_full_text_url": "https://www.govtrack.us/congress/bills/112/hr1464/text",
    }


def get_bill_introduction_date(bill_id=None):
    return {
        "bill_id": bill_id,
        "bill_intro_date": datetime.datetime(2011, 4, 8, 0, 0),
    }


def get_all_bill_status_change_dates(bill_id=None):
    return {
        "bill_id": bill_id,
        "major_actions": [
            [
                datetime.datetime(2011, 4, 8, 0, 0),
                2,
                "Referred to the House Committee on Foreign Affairs.",
                "<action datetime=\"2011-04-08\" state=\"REFERRED\">\n      <text>Referred to the House Committee on Foreign Affairs.</text>\n    </action>\n    ",
            ],
            [
                datetime.datetime(2012, 9, 11, 18, 31),
                4,
                "On motion to suspend the rules and pass the bill Agreed to by voice vote.",
                "<vote how=\"by voice vote\" type=\"vote\" datetime=\"2012-09-11T18:31:00-04:00\" where=\"h\" result=\"pass\" state=\"PASS_OVER:HOUSE\">\n      <text>On motion to suspend the rules and pass the bill Agreed to by voice vote.</text>\n      <reference ref=\"CR H5842-5843\" label=\"text\"/>\n    </vote>\n    "
            ],
            [
                "datetime.datetime(2012, 12, 28, 0, 0)",
                11,
                "Passed Senate with an amendment and an amendment to the Title by Unanimous Consent.",
                "<vote how=\"by Unanimous Consent\" type=\"vote2\" datetime=\"2012-12-28\" where=\"s\" result=\"pass\" state=\"PASS_BACK:SENATE\">\n      <text>Passed Senate with an amendment and an amendment to the Title by Unanimous Consent.</text>\n    </vote>\n    "
            ],
            [
                "datetime.datetime(2013, 1, 1, 12, 29)",
                9,
                "On motion that the House agree to the Senate amendments Agreed to without objection.",
                "<vote how=\"without objection\" type=\"pingpong\" datetime=\"2013-01-01T12:29:00-05:00\" where=\"h\" result=\"pass\" state=\"PASSED:BILL\">\n      <text>On motion that the House agree to the Senate amendments Agreed to without objection.</text>\n      <reference ref=\"CR H7521\" label=\"text as House agreed to Senate amendment\"/>\n    </vote>\n    "
            ],
            [
                "datetime.datetime(2013, 1, 14, 0, 0)",
                28,
                "Signed by President.",
                "<signed datetime=\"2013-01-14\" state=\"ENACTED:SIGNED\">\n      <text>Signed by President.</text>\n    </signed>\n   "
            ],
        ],
    }


def get_bill_topics(bill_id=None):
    return {"bill_id": bill_id, "topics": ["internet", "mooses", "navy"], }


def get_bill_committee_jurisdiction(bill_id=None):
    return {
        "bill_id": bill_id,
        "committee_id": 2716,
        "committee_name": "House Committee on Foreign Affairs",
        "committee_chamber": "House of Representatives",
    }

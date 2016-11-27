# python packages
import json
import datetime

# django packages
from django.http import HttpResponse

# panopticon packages
from server.bill_info import get_bill_ids


def bills(request):
    obj = {"update_datetime": datetime.datetime.now().isoformat(),
           "bill_info": get_bill_ids(),
    }
    return HttpResponse(json.dumps(obj))

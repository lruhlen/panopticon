# python packages
import json
import datetime

# django packages
from django.http import HttpResponse

# panopticon packages
from server.bill_info import get_bills


def bills(request):
    dt = datetime.datetime.now().isoformat()
    obj = {
        "update_datetime": dt,
        "bills": get_bills(),
    }
    return HttpResponse(json.dumps(obj))

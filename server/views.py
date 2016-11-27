# python packages
import json

# django packages
from django.http import HttpResponse

# panopticon packages
from server.bill_info import get_bill_ids


def bills(request):
    return HttpResponse(json.dumps(get_bill_ids()))

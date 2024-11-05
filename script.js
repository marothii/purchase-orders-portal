const jsonData = {
    "mvPurchaseOrders": [
        {
            "PurchaseOrderId": 90,
            "PurchaseOrderAddress": "One Microsoft Way, Redmond, WA 98052-7329, United States",
            "PurchaseOrderContactPerson": "Puneet Dhal",
            "PurchaseOrderStatus": "Verified",
            "Currency": "ZAR",
            "PurchaseOrderDetails": [
                {
                    "PurchaseOrderRowProductSKU": "PRODUCT_6",
                    "PurchaseOrderRowQuantity": 12,
                    "PurchaseOrderRowUnitPriceWithoutTaxOrDiscount": 35,
                    "PurchaseOrderRowTotalAmount": 420
                },
                {
                    "PurchaseOrderRowProductSKU": "PRODUCT_8",
                    "PurchaseOrderRowQuantity": 8,
                    "PurchaseOrderRowUnitPriceWithoutTaxOrDiscount": 164,
                    "PurchaseOrderRowTotalAmount": 1312
                },
                {
                    "PurchaseOrderRowProductSKU": "PRODUCT_9_VERSION_A",
                    "PurchaseOrderRowQuantity": 15,
                    "PurchaseOrderRowUnitPriceWithoutTaxOrDiscount": 164,
                    "PurchaseOrderRowTotalAmount": 2460
                }
            ]
        },
        {
            "PurchaseOrderId": 89,
            "PurchaseOrderAddress": "410 Terry Ave. North Seattle, WA, 98109-5210, United States",
            "PurchaseOrderContactPerson": "Chris A.",
            "PurchaseOrderStatus": "Verified",
            "Currency": "EUR",
            "PurchaseOrderDetails": [
                {
                    "PurchaseOrderRowProductSKU": "PRODUCT_2",
                    "PurchaseOrderRowQuantity": 12,
                    "PurchaseOrderRowUnitPriceWithoutTaxOrDiscount": 170,
                    "PurchaseOrderRowTotalAmount": 2040
                },
                {
                    "PurchaseOrderRowProductSKU": "PRODUCT_6",
                    "PurchaseOrderRowQuantity": 4,
                    "PurchaseOrderRowUnitPriceWithoutTaxOrDiscount": 50,
                    "PurchaseOrderRowTotalAmount": 200
                }
            ]
        },
        {
            "PurchaseOrderId": 88,
            "PurchaseOrderAddress": "410 Terry Ave. North Seattle, WA, 98109-5210, United States",
            "PurchaseOrderContactPerson": "Babis",
            "PurchaseOrderStatus": "Pending",
            "Currency": "EUR",
            "PurchaseOrderDetails": [
                {
                    "PurchaseOrderRowProductSKU": "PRODUCT_1",
                    "PurchaseOrderRowQuantity": 10,
                    "PurchaseOrderRowUnitPriceWithoutTaxOrDiscount": 100,
                    "PurchaseOrderRowTotalAmount": 1000
                },
                {
                    "PurchaseOrderRowProductSKU": "PRODUCT_2",
                    "PurchaseOrderRowQuantity": 5,
                    "PurchaseOrderRowUnitPriceWithoutTaxOrDiscount": 50,
                    "PurchaseOrderRowTotalAmount": 250
                },
                {
                    "PurchaseOrderRowProductSKU": "PRODUCT_3",
                    "PurchaseOrderRowQuantity": 30,
                    "PurchaseOrderRowUnitPriceWithoutTaxOrDiscount": 2,
                    "PurchaseOrderRowTotalAmount": 60
                }
            ]
        }
    ],
    "ResponseStatus": {
        "ErrorCode": "0"
    }
};

function displayPurchaseOrders() {
    const orderList = document.getElementById('purchaseOrdersList');
    jsonData.mvPurchaseOrders.forEach(order => {
        const listItem = document.createElement('li');
        listItem.textContent = `Order ID: ${order.PurchaseOrderId}`;
        listItem.addEventListener('click', () => showOrderDetails(order));
        orderList.appendChild(listItem);
    });
}

function showOrderDetails(order) {
    document.getElementById('orderAddress').textContent = order.PurchaseOrderAddress;
    document.getElementById('orderContactPerson').textContent = order.PurchaseOrderContactPerson;
    document.getElementById('orderStatus').textContent = order.PurchaseOrderStatus;

    const orderItemsBody = document.getElementById('orderItemsBody');
    orderItemsBody.innerHTML = ''; // Clear previous items
    order.PurchaseOrderDetails.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.PurchaseOrderRowProductSKU}</td>
            <td>${item.PurchaseOrderRowQuantity}</td>
            <td>${item.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount} ${order.Currency}</td>
            <td>${item.PurchaseOrderRowTotalAmount} ${order.Currency}</td>
        `;
        orderItemsBody.appendChild(row);
    });

    const modal = document.getElementById('orderModal');
    modal.style.display = "block";
}

document.getElementById('closeModal').onclick = function() {
    document.getElementById('orderModal').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('orderModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

displayPurchaseOrders();

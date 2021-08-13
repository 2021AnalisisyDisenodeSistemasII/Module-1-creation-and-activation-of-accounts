new Vue({
    el: '#sucursal-cashier-select',
    data: {
        sucursals: [],
        cashiers: [],
        current_sucursal: null,
        current_cashier: null

    },
    methods: {
        getSucursals: function () {
            var sucs;
            fetch('http://localhost:3000/sucursals')
                .then(res => res.json())
                .then(data => this.sucursals = data);

        },
        getCashiers: function (id) {
            if (id) {
                fetch('http://localhost:3000/sucursal/cashiers/' + id)
                    .then(res => res.json())
                    .then(data => this.cashiers = data);
            }
        },
        postSucCas: function (suc_id, cas_id) {

            if (suc_id && cas_id) {
                fetch('http://localhost:3000/login',
                    {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            sucursal_id: suc_id,
                            cashier_id: cas_id
                        })
                    }).then(res => {
                        console.log("Request complete! response:", res);
                    })
            }
        },
        getCurrentSucCas: function () {
            fetch('http://localhost:3000/sucursal/cashier')
                .then(res => res.json())
                .then(data => {
                    this.current_sucursal = data["sucursal_id"],
                    this.current_cashier = data["cashier_id"]
                });
        }
    }
});
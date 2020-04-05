<template>
  <mdb-tbl hover>
    <thead class="blue-grey lighten-4">
      <tr>
        <th>Fecha</th>
        <th>Proveedor</th>
        <th>Forma de Pago</th>
        <th>Comprob</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="proveedor in proveedores" v-bind:key="proveedor.id">
        <td>{{ proveedor.fecha }}</td>
        <td>{{ proveedor.proveedor }}</td>
        <td>{{ proveedor.pago }}</td>
        <td>{{ proveedor.comprobante }}</td>
        <td>S/.{{ proveedor.total }}</td>
      </tr>
    </tbody>
  </mdb-tbl>
</template>

<script>
export default {
  name: "Proveedores",
  data() {
    return {
      proveedores: [
        {
          id: 1,
          fecha: "14/02/2020",
          proveedor: "Pedro García",
          pago: "Efectivo",
          comprobante: "B001-1",
          total: "100.00",
        },
        {
          id: 2,
          fecha: "14/01/2020",
          proveedor: "María Gonzales",
          pago: "Crédito",
          comprobante: "B001-2",
          total: "250.00",
        },
        {
          id: 3,
          fecha: "15/02/2020",
          proveedor: "Renato Caballero",
          pago: "Efectivo",
          comprobante: "B001-3",
          total: "689.00",
        },
        {
          id: 4,
          fecha: "18/02/2020",
          proveedor: "Mónica Torreblanca",
          pago: "Efectivo",
          comprobante: "B001-4",
          total: "63.00",
        },
        {
          id: 5,
          fecha: "14/01/2020",
          proveedor: "Ruth Figueroa",
          pago: "Crédito",
          comprobante: "B001-5",
          total: "1200.00",
        },
      ],
    };
  },
};
</script>

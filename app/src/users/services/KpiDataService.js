/**
 * Users DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function KpiDataService($q) {
  var kpis = [
    {
      name: 'Volumen de ventas',
      id: '1',
      value: 0
    },
    {
        name: 'Clientes no compradores',
        id: '2',
        value: 0
    },
    {
        name: 'Quejas',
        id: '3',
        value: 0
    }
  ];

  // Promise-based API
  return {
    loadAllKpis: function() {
      return $q.when(kpis);
    }
  };
}

export default ['$q', KpiDataService];


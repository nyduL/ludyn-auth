(() => {
  const params = new URLSearchParams(window.location.search);
  const environment = params.get('env') === 'staging' ? 'staging' : 'production';

  const environments = {
    production: {
      supabaseUrl: 'https://zduodmzyyvmrjipxujim.supabase.co',
      publishableKey: 'sb_publishable_A4ZcNKgv89RjofY222B4tA_MhQ-lbDl',
      backendUrl: 'https://ludyn-backend.onrender.com',
    },
    staging: {
      supabaseUrl: 'https://yitlawujaoriueqqmiim.supabase.co',
      publishableKey: 'sb_publishable_DW7MaiqrWgteaB8IbFv77Q_YLqsiOD2',
      backendUrl: 'https://ludyn-backend-staging.onrender.com',
    },
  };

  window.LUDYN_CONFIG = {
    environment,
    openAppUrl: 'ludyn://open',
    ...environments[environment],
  };
})();

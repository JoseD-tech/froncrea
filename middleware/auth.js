export default function ({ store, redirect }) {
    // Verificar si el usuario está autenticado
    if (!store.state.auth.loggedIn) {
      // Si no está autenticado, redirigir a la página de inicio de sesión
      return redirect('/login')
    }
  }
  
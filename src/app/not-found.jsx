import Link from "next/link";
import { Button } from "@heroui/react";

function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-12 text-center dark:bg-gray-900">
      <div className="max-w-md">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white">
          404
        </h1>
        <p className="mt-4 text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Página no encontrada
        </p>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Lo sentimos, no pudimos encontrar la página que estás buscando.
        </p>
        <Button color="primary" size="lg" className="p-0 m-6">
          <Link href="/" className="flex items-center justify-center px-4">
            Volver al inicio
          </Link>
        </Button>
      </div>
    </main>
  );
}

export default NotFound;

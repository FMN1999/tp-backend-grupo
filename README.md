# TP-TTADS

# Integrantes
- Buchhamer Ariel: 46217
- Dolan Guillermo: 46101
- Navarro Franco: 46387
- Santolari Matias: 45790


# Enunciado
Una empresa textil requiere un sistema que gestione el inventario de sus productos y las ventas del negocio.

El sistema permite a los clientes visualizar los productos y reservarlos para su posterior entrega. El cliente podrá visualizar los detalles de la ropa que le interese y podrá elegir el mismo.

En caso de que un cliente se presenta a la caja con la ropa que desea comprar, el vendedor registra la compra en el sistema. Además se actualizará el stock de dichos productos para reflejar a tiempo real el inventario. Las compras realizadas por los clientes (excepto ropa interior), poseen un tiempo de devolución de 1 semana.

El sistema entonces será utilizado por los vendedores de la caja del establecimiento, y también por el sector de depósito, quienes realizarán controles semanales entre el inventario físico y la situación en el sistema (para minimizar el riesgo de robos por parte de un interno de la compañía). También habrá un administrador que será el que registre la ropa nueva que entra al establecimiento y modifique datos en cuanto a detalles o precios.

# Modelo de Dominio

![ModeloDominio-MD regularidad tp1](https://user-images.githubusercontent.com/64033184/184562273-ba4be67c-bae5-4152-991d-eae7ca40baae.jpg)


# Entidades para los abmc simples:
-cliente
-tipoRopa
-temporada
-empleado

# Entidades para los abmc complejos:
-ropa
-precioRopa

# listados:
-lista de ropas
-lista de ropas con filtro por tipo de ropa

Al momento de seleccionar una ropa que te muestre todos los detalles de la temporada, el tipo de ropa, el precio..

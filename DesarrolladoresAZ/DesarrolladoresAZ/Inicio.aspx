<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Inicio.aspx.vb" Inherits="DesarrolladoresAZ.Inicio" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
       <h1>Menú de datos ,Desarrolladores</h1><br />
        <h3>Seleciona lo que quieres hacer con los datos de los desarrolladores</h3>
             <h4><asp:HyperLink id="hyperlink1" NavigateUrl="CrearDesarrollador.aspx" runat="server" text="Crear un Desarrollador"></asp:HyperLink><br />
              <asp:HyperLink id="hyperlink2" NavigateUrl="ConsultarDesarrollador.aspx" runat="server" text="Consultar Desarrollador"></asp:HyperLink></h4>
   </div>
    </form>
</body>
</html>

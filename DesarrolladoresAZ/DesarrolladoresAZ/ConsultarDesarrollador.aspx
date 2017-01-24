<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="ConsultarDesarrollador.aspx.vb" Inherits="DesarrolladoresAZ.ConsultarDesarrollador" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
      <asp:DropDownList id="dplNombre" runat="server" DataTextField="Nombre"></asp:DropDownList><asp:button id="btnactualizarGridView" runat="server" text="Actualizar GridView"/>
      <asp:HiddenField id="hidddesarrollador" runat="server" value="nombre"></asp:HiddenField><br />
      <asp:GridView id="gdvDesarrolladores" AutoGenerateColumns="false" DataValueField="Cedula" runat="server" Width="300px" Height="300" style="margin-right: 4px" >
             <Columns>
                   <asp:BoundField DataField="Cedula" HeaderText="Numero De Cedula" />
                   <asp:BoundField DataField="Nombre" HeaderText="Nombre" />
                   <asp:BoundField DataField="Apellido" HeaderText="Apellido" />
                   <asp:BoundField DataField="Telefono" HeaderText="Telefono" />  
             </Columns>
       </asp:GridView>
    </div>
    </form>
</body>
</html>

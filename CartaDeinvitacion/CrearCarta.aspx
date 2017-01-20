<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="CrearCarta.aspx.vb" Inherits="CartaDeinvitacion.CrearCarta" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div id="left" runat="server">
       <h2> Color del fondo de la carta</h2>
        <asp:DropDownList id="sltfondo" runat="server" Width="300px" AutoPostBack="true"></asp:DropDownList>
        <h2>Tipo de Fuente</h2>
        <asp:DropDownList id="sltfuente" runat="server" Width="300px"  AutoPostBack="true"></asp:DropDownList><br />
        <h2>Especificar tamaño de fuente</h2>
        <asp:TextBox id="txttamanofuente" runat="server"  text="50" AutoPostBack="true"></asp:TextBox><br />
        <h2>Escoja Estilo de borde</h2
        <asp:RadioButtonList id="rdbl" runat="server"  AutoPostBack="true"></asp:RadioButtonList>
        <h2>Color de Fuente</h2>
        <asp:DropDownList id="sltfuenteColor" runat="server" Width="300px"  AutoPostBack="true"></asp:DropDownList><br /><br />

        <asp:CheckBox id="chk" runat="server"  AutoPostBack="true"/>  añadir foto <br/>
          Ingrese texto de la tarjeta<br />
        <asp:TextBox id="txtmensaje"  runat="server" TextMode="MultiLine" ForeColor="black"   AutoPostBack="true" ></asp:TextBox>
        <asp:Button id="btnactualizar" runat="server" Text="Actualizar"/>
    </div>
     <asp:Panel  id="right"  runat="server">
         <centre><h2 id="mensaje" runat="server"></h2></centre><br />
         <asp:image id="imagenpas"  style="padding:50px" runat="server" src="pastel.jpg" width="250" height="175" />
    </asp:Panel>
    </form>
</body>
</html>

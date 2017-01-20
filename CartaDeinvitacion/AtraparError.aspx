<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="AtraparError.aspx.vb" Inherits="CartaDeinvitacion.AtraparError" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div style="padding:50px">
        A: <asp:TextBox id="txtA" runat="server"></asp:TextBox><br />
        B: <asp:TextBox id="txtB" runat="server"></asp:TextBox><br /><br /><br />
        <asp:button id="btndividir" runat="server" Text="dividir"/><br />
        <asp:Label id="lblresultado" runat="server" ></asp:Label>
    </div>
    </form>
</body>
</html>

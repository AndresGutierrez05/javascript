Imports System.Drawing.Text
Imports System.Drawing

Public Class CrearCarta
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If IsPostBack = False Then
            left.Style("padding") = "20px"
            left.Style("width") = "400px"
            left.Style("height") = "790px"
            left.Style("background-color") = "crimson"
            left.Style("float") = "left"
            right.Style("float") = "left"
            right.Style("width") = "400px"
            right.Style("height") = "790px"

            Dim colorArreglo As String() = System.Enum.GetNames(GetType(KnownColor))
            sltfondo.DataSource = colorArreglo
            sltfondo.DataBind()

            Dim FuenteColor As String() = System.Enum.GetNames(GetType(KnownColor))
            sltfuenteColor.DataSource = FuenteColor
            sltfuenteColor.DataBind()

            For Each family As FontFamily In FontFamily.Families
                sltfuente.Items.Add(family.Name)
            Next

            Dim borderArreglo As String() = System.Enum.GetNames(GetType(BorderStyle))
            rdbl.DataSource = borderArreglo
            rdbl.DataBind()

            rdbl.SelectedIndex = 0

        End If
        Dim tamanoFuente As Integer = txttamanofuente.Text
        right.Style("background") = sltfondo.SelectedItem.Text
        right.Style("border-style") = rdbl.SelectedItem.Text
        mensaje.InnerText = txtmensaje.Text
        mensaje.Style("font-family") = sltfuente.SelectedItem.Text
        mensaje.Style("font-size") = tamanoFuente & "px"
        mensaje.Style("color") = sltfuenteColor.Text


    End Sub


    Protected Sub chk_CheckedChanged(sender As Object, e As EventArgs) Handles chk.CheckedChanged
        If chk.Checked = True Then
            imagenpas.Visible = True
        Else
            imagenpas.Visible = False
        End If
    End Sub
End Class
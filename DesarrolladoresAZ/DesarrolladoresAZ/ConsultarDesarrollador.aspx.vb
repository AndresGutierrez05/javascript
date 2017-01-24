Imports Desarrolladores_Logica
Imports Desarrolladores_entidades

Public Class ConsultarDesarrollador
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If Me.IsPostBack = False Then
            dplNombre.DataSource = Logica.NombreDesarrolladores()
            dplNombre.DataBind()
            gdvDesarrolladores.DataSource = Logica.BuscarDesarrollador(dplNombre.SelectedValue)
            gdvDesarrolladores.DataBind()
        End If
    End Sub

    Protected Sub btnactualizarGridView_Click(sender As Object, e As EventArgs) Handles btnactualizarGridView.Click

        gdvDesarrolladores.DataSource = Logica.BuscarDesarrollador(dplNombre.SelectedValue)
        gdvDesarrolladores.DataBind()
    End Sub

End Class
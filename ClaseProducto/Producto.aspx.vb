Public Class Producto
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim ProductoVenta As New Producto("Anime desconocido", 19.99D, "")
    End Sub

    Public Function GetHtml() As String
        Dim StringDeHtml As String = "<h1>" & _nombre & "</h1><br/>" & "<h3> Costs: " & _precio.ToString() & "</h3>  <br />" & "<img src='" & _imagen & "' />"
        Return StringDeHtml
    End Function
    Private _nombre As String
    Private _precio As Decimal
    Private _imagen As String

    Public Property Nombre() As String
        Get
            Return _nombre
        End Get
        Set(value As String)
            _nombre = value
        End Set
    End Property

    Public Property Precio() As Decimal
        Get
            Return _precio
        End Get
        Set(value As Decimal)
            _precio = value
        End Set
    End Property

    Public Property Imagen() As String
        Get
            Return _imagen
        End Get
        Set(value As String)
            _imagen = value
        End Set
    End Property

    Public Sub New(ByVal Nombre As String, ByVal Precio As Decimal, ByVal Imagen As String)
        Me._nombre = Nombre
        Me._precio = Precio
        Me._imagen = Imagen
    End Sub
End Class
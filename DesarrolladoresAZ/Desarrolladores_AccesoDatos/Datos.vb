Imports System.Data
Imports System.Data.SqlClient
Imports System.Configuration
Imports Desarrolladores_entidades
Public Class Datos

    Public Shared Function ListaDesarrolladores() As List(Of Entidades)
        Dim desarrolladores As List(Of Entidades) = New List(Of Entidades)
        Using conexion As New SqlConnection(ConfigurationManager.ConnectionStrings("Conex").ToString())
            conexion.Open()
            Dim Consulta = "select Nombre,Apellido from dbo.Desarrolladores"
            Using cmd As New SqlCommand(Consulta, conexion)
                Dim dataReader As SqlDataReader = cmd.ExecuteReader()
                While dataReader.Read()
                    Dim desarrollador As New Entidades
                    desarrollador.Nombre = Convert.ToString(dataReader("Nombre"))
                    desarrollador.NombreCompleto = Convert.ToString(dataReader("Nombre")) & "  " & Convert.ToString(dataReader("Apellido"))
                    desarrolladores.Add(desarrollador)
                End While
            End Using
        End Using
        Return desarrolladores
    End Function

    Public Shared Function DatosDesarrollador(ByVal Nombre As String) As List(Of Entidades)
        Dim desarrolladores As List(Of Entidades) = New List(Of Entidades)
        Using conexion As New SqlConnection(ConfigurationManager.ConnectionStrings("Conex").ToString())
            conexion.Open()
            Dim Consulta = "select * from dbo.Desarrolladores where Nombre=@Nombre"
            Using cmd As New SqlCommand(Consulta, conexion)
                cmd.Parameters.AddWithValue("@Nombre", Nombre)
                Dim dataReader As SqlDataReader = cmd.ExecuteReader()
                While dataReader.Read()
                    Dim desarrollador As New Entidades
                    desarrollador.Cedula = Convert.ToInt32(dataReader("Cedula"))
                    desarrollador.Nombre = Convert.ToString(dataReader("Nombre"))
                    desarrollador.Apellido = Convert.ToString(dataReader("Apellido"))
                    desarrollador.Telefono = Convert.ToString(dataReader("Telefono"))
                    desarrollador.Imagen = Convert.ToString(dataReader("Imagen"))
                    desarrollador.NombreCompleto = Convert.ToString(dataReader("Nombre")) & "  " & Convert.ToString(dataReader("Apellido"))
                    desarrolladores.Add(desarrollador)
                End While
            End Using
        End Using
        Return desarrolladores
    End Function

End Class

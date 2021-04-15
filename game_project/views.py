from django.views.generic.base import TemplateView

class IndexView(TemplateView):
    template_name = 'index.html'

class TicTacToeView(TemplateView):
    template_name = 'tictactoe.html'

class Connect4View(TemplateView):
    template_name = 'connect4.html'

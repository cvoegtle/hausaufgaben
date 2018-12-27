package org.voegtle.homework.processing

import org.voegtle.homework.data.FormattedDay
import org.voegtle.homework.data.FormattedHomework
import org.voegtle.homework.data.Hausaufgabe
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

class HomeworkFormatter {
  val format = SimpleDateFormat("EEEE dd:MM", Locale.GERMANY)
  val formattedDays = ArrayList<FormattedDay>()

  fun format(hausaufgaben: List<Hausaufgabe>): List<FormattedDay> {
    hausaufgaben.forEach {
      val dateStr = formatDayAndMonth(it.datum!!)
      val currentDay = getCurrentDay(dateStr)
      currentDay.homework.add(formatHomework(it))
    }
    return formattedDays
  }

  private fun formatHomework(hausaufgabe: Hausaufgabe) = FormattedHomework(hausaufgabe.fach!!.bezeichnung, hausaufgabe.aufgabe!!)

  private fun formatDayAndMonth(datum: Long) = format.format(Date(datum))

  private fun getCurrentDay(date: String): FormattedDay {
    if (formattedDays.isEmpty()) {
      formattedDays.add(FormattedDay(date))
    } else if (formattedDays.last().day != date) {
      formattedDays.add(FormattedDay(date))
    }
    return formattedDays.last()
  }
}
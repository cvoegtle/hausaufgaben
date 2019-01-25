package org.voegtle.homework.processing

import org.voegtle.homework.data.Hausaufgabe
import java.util.Date

fun addCreator(aufgabe: Hausaufgabe, creator: String) {
  aufgabe.creator = creator
}

fun add12Hours(aufgabe: Hausaufgabe) {
  val newDate = (aufgabe.datum ?: 0) + (12 * 60 * 60 * 1000)
  aufgabe.datum = newDate
}

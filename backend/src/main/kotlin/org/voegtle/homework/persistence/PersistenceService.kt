package org.voegtle.homework.persistence

import com.googlecode.objectify.ObjectifyService
import org.voegtle.homework.data.Hausaufgabe

fun loadHomeworkSince(startTime: Long): List<Hausaufgabe>
  = ObjectifyService.ofy().load().type(Hausaufgabe::class.java).filter("datum >=", startTime).order("-datum").list()

fun saveAufgabe(aufgabe: Hausaufgabe) {
  ObjectifyService.ofy().save().entity(aufgabe).now()
}

fun deleteAufgabe(id: Long) {
  ObjectifyService.ofy().delete().type(Hausaufgabe::class.java).id(id).now()
}

